'use strict';
const { timingSafeEqual } = require('node:crypto');
const { LOCALES, DEFAULT_LOCALE, SOURCE_LOCALE } = require('../../../locales');
const PAGE_TYPES = [
  'home-page',
  'about-page',
  'services-page',
  'projects-page',
  'news-page',
  'contact-page',
  'privacy-page',
  'standards-page',
  'global',
  'header',
  'site-settings',
  'footer',
];
const COLLECTIONS = {
  services: 'service',
  projects: 'project',
  articles: 'article',
};
// Dịch vụ và Dự án xếp theo cây cha – con; chỉ cần slug của mục cha để dựng đường dẫn.
const TREE_TYPES = new Set(['services', 'projects']);
// Derive explicit deep population from the section schemas; no client-controlled query.
function populateFor(strapi, uid, depth = 0) {
  if (depth > 5) return {};
  const schema = strapi.contentTypes[uid] || strapi.components[uid];
  const populate = {};
  for (const [key, attr] of Object.entries(schema?.attributes || {})) {
    if (attr.type === 'media') populate[key] = true;
    if (attr.type === 'component')
      populate[key] = { populate: populateFor(strapi, attr.component, depth + 1) };
    if (attr.type === 'dynamiczone')
      populate[key] = {
        on: Object.fromEntries(
          attr.components.map((c) => [c, { populate: populateFor(strapi, c, depth + 1) }]),
        ),
      };
  }
  if (depth === 0 && schema?.attributes?.parent?.relation === 'manyToOne')
    populate.parent = { fields: ['slug', 'title'] };
  return populate;
}
module.exports = {
  async find(ctx) {
    const type = ctx.params.type;
    const name = COLLECTIONS[type] || (PAGE_TYPES.includes(type) ? type : null);
    if (!name) return ctx.notFound();
    const requested = String(ctx.query.locale || DEFAULT_LOCALE);
    if (!LOCALES.some((l) => l.code === requested)) return ctx.badRequest('INVALID_LOCALE');
    // A missing translation falls back to the default and then the source locale.
    const chain = [...new Set([requested, DEFAULT_LOCALE, SOURCE_LOCALE])];
    const uid = `api::${name}.${name}`;
    const base = { status: 'published', populate: populateFor(strapi, uid) };
    if (ctx.params.slug) base.filters = { slug: ctx.params.slug };
    if (COLLECTIONS[type] && !ctx.params.slug) {
      const seen = new Set();
      const data = [];
      for (const locale of chain) {
        const docs = await strapi
          .documents(uid)
          .findMany({ ...base, locale, sort: ['createdAt:asc'], limit: 1000 });
        for (const doc of docs)
          if (!seen.has(doc.documentId)) {
            seen.add(doc.documentId);
            data.push(doc);
          }
      }
      // Keep a stable order across languages: documents sorted by their first creation.
      const created = new Map();
      for (const locale of chain)
        for (const doc of await strapi
          .documents(uid)
          .findMany({ locale, fields: ['createdAt'], limit: 1000 }))
          if (!created.has(doc.documentId) || doc.createdAt < created.get(doc.documentId))
            created.set(doc.documentId, doc.createdAt);
      // Cây dịch vụ / dự án xếp theo "Thứ tự" biên tập viên đặt, sau đó tới thời điểm tạo.
      data.sort(
        (a, b) =>
          (TREE_TYPES.has(type) ? (a.order || 0) - (b.order || 0) : 0) ||
          String(created.get(a.documentId)).localeCompare(String(created.get(b.documentId))),
      );
      ctx.body = { data };
      return;
    }
    for (const locale of chain) {
      const doc = await strapi.documents(uid).findFirst({ ...base, locale });
      if (doc) {
        ctx.body = { data: doc };
        return;
      }
    }
    return ctx.notFound();
  },
  async inquiry(ctx) {
    // Only the Next.js server can submit. Public users cannot list or modify inquiries.
    const expected = process.env.INQUIRY_SECRET || '';
    const supplied = ctx.get('x-inquiry-secret');
    if (
      !expected ||
      Buffer.byteLength(supplied) !== Buffer.byteLength(expected) ||
      !timingSafeEqual(Buffer.from(supplied), Buffer.from(expected))
    )
      return ctx.unauthorized();
    const body = ctx.request.body || {};
    const data = Object.fromEntries(
      ['name', 'email', 'subject', 'message', 'phone', 'company', 'service', 'topics'].map((k) => [
        k,
        typeof body[k] === 'string' ? body[k].trim() : '',
      ]),
    );
    const preferredDate =
      typeof body.preferredDate === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(body.preferredDate)
        ? body.preferredDate
        : null;
    if (
      !data.name ||
      data.name.length > 100 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email) ||
      data.email.length > 254 ||
      !data.subject ||
      data.subject.length > 200 ||
      data.message.length < 10 ||
      data.message.length > 5000 ||
      data.phone.length > 40 ||
      (data.phone && !/^[+0-9()./ -]{6,40}$/.test(data.phone)) ||
      data.company.length > 200 ||
      data.service.length > 200 ||
      data.topics.length > 500 ||
      body.consent !== true
    )
      return ctx.badRequest('INVALID_INPUT');
    await strapi
      .documents('api::inquiry.inquiry')
      .create({ data: { ...data, preferredDate, consent: true, status: 'new' } });
    ctx.status = 201;
    ctx.body = { ok: true };
  },
};
