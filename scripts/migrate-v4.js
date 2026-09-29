'use strict';
/**
 * Chuyển dữ liệu sang cấu trúc cây của bản Figma "Website Redesign V1" (I7AI3bFueHVCpfJetnSWsZ).
 *
 * Dịch vụ và Dự án nay xếp theo cây cha – con, đường dẫn là chuỗi slug: /dich-vu/<cha>/<con>.
 * Script làm đúng những việc sau, chỉ ghi vào ô còn trống nên không đè nội dung biên tập viên:
 *   1. Tạo hai mục dịch vụ gốc (Thiết bị & giải pháp, Logistics) nếu chưa có.
 *   2. Gán mục cha cho các dịch vụ hiện có theo trường Nhóm.
 *   3. Khối Dịch vụ trên trang chủ và trang Dịch vụ trỏ đúng nguồn danh sách mới.
 *   4. Menu đầu trang bỏ nguồn "service-groups" đã ngừng dùng.
 *
 * Chạy: npm run migrate:v4
 */
const crypto = require('node:crypto');
const fs = require('node:fs');
const path = require('node:path');
const { LOCALES, SOURCE_LOCALE } = require('../src/locales');
const { CONTENT, localizeContent } = require('./seed');

/** Ảnh đã nằm sẵn trong Media Library dưới tên mà bộ seed đặt. */
async function findSeedMedia(strapi, file) {
  const filepath = path.join(process.env.SEED_ASSETS_DIR || 'seed-assets', file);
  if (!fs.existsSync(filepath)) return null;
  const digest = crypto.createHash('sha256').update(fs.readFileSync(filepath)).digest('hex');
  const name = `topwell-seed-${digest}${path.extname(filepath).toLowerCase()}`;
  const found = await strapi.db.query('plugin::upload.file').findOne({ where: { name } });
  return found ? found.id : null;
}

/** Đổi mọi tham chiếu ảnh `$file` trong dữ liệu seed thành id trong Media Library. */
async function withMedia(strapi, value) {
  if (Array.isArray(value)) return Promise.all(value.map((item) => withMedia(strapi, item)));
  if (!value || typeof value !== 'object') return value;
  if (value.$file) {
    const media = await findSeedMedia(strapi, value.$file);
    return media ? { media, alt: value.alt } : null;
  }
  const out = {};
  for (const [key, item] of Object.entries(value)) out[key] = await withMedia(strapi, item);
  return out;
}

/** Hai mục dịch vụ gốc lấy từ bộ seed, theo từng ngôn ngữ. */
function rootServices(code) {
  const localized = localizeContent(CONTENT, code);
  const tree = localized.content || localized;
  return tree.services.filter((s) => !s.parent);
}

async function migrate(strapi) {
  const changes = {
    roots: 0,
    merged: 0,
    linked: 0,
    homePage: 0,
    servicesPage: 0,
    projectsPage: 0,
    header: 0,
    testimonials: 0,
    projectCta: 0,
    newsPromo: 0,
    rootText: 0,
  };
  const services = strapi.documents('api::service.service');

  // Ngôn ngữ nguồn phải chạy trước để các bản dịch là localization của cùng một tài liệu.
  const codes = [SOURCE_LOCALE, ...LOCALES.map((l) => l.code).filter((c) => c !== SOURCE_LOCALE)];

  // 0. Gộp các mục gốc bị tạo trùng thành một tài liệu duy nhất.
  const rootSlugs = rootServices(SOURCE_LOCALE).map((r) => r.slug);
  const replaced = new Map();
  for (const slug of rootSlugs) {
    const docs = new Map();
    for (const code of codes) {
      const found = await services.findFirst({ filters: { slug }, locale: code });
      if (found) docs.set(found.documentId, docs.get(found.documentId) || []);
      if (found) docs.get(found.documentId).push({ code, doc: found });
    }
    if (docs.size < 2) continue;
    const keeperId =
      [...docs.entries()].find(([, rows]) => rows.some((r) => r.code === SOURCE_LOCALE))?.[0] ||
      [...docs.keys()][0];
    for (const [documentId, rows] of docs) {
      if (documentId === keeperId) continue;
      for (const { code, doc } of rows) {
        const existing = await services.findFirst({ documentId: keeperId, locale: code });
        if (!existing) {
          const data = await withMedia(strapi, { ...doc });
          for (const key of ['id', 'documentId', 'createdAt', 'updatedAt', 'publishedAt', 'locale'])
            delete data[key];
          delete data.parent;
          delete data.children;
          await services.update({ documentId: keeperId, locale: code, data, status: 'published' });
        }
      }
      await services.delete({ documentId });
      replaced.set(documentId, keeperId);
      changes.merged++;
    }
  }

  for (const code of codes) {
    // 1. Hai mục dịch vụ gốc.
    for (const root of rootServices(code)) {
      const existing = await services.findFirst({ filters: { slug: root.slug }, locale: code });
      if (existing) continue;
      const origin =
        code === SOURCE_LOCALE
          ? null
          : await services.findFirst({ filters: { slug: root.slug }, locale: SOURCE_LOCALE });
      const data = await withMedia(strapi, { ...root, parent: undefined });
      delete data.parent;
      if (origin)
        await services.update({
          documentId: origin.documentId,
          locale: code,
          data,
          status: 'published',
        });
      else await services.create({ data, locale: code, status: 'published' });
      changes.roots++;
    }

    // 2. Nối các dịch vụ hiện có vào mục gốc tương ứng.
    const roots = new Map();
    for (const root of rootServices(code)) {
      const doc = await services.findFirst({ filters: { slug: root.slug }, locale: code });
      if (doc) roots.set(root.group, doc.documentId);
    }
    const all = await services.findMany({ locale: code, populate: { parent: true }, limit: 1000 });
    const rootSlugs = new Set(rootServices(code).map((r) => r.slug));
    const seeded = localizeContent(CONTENT, code);
    const seedServices = (seeded.content || seeded).services;
    for (const doc of all) {
      if (rootSlugs.has(doc.slug)) continue;
      const data = {};
      // Gán lại mục cha khi còn trống hoặc đang trỏ vào tài liệu trùng đã xóa.
      if ((!doc.parent || replaced.has(doc.parent.documentId)) && roots.get(doc.group))
        data.parent = roots.get(doc.group);
      if (doc.order === null || doc.order === undefined)
        data.order = seedServices.find((x) => x.slug === doc.slug)?.order ?? 0;
      if (!Object.keys(data).length) continue;
      await services.update({
        documentId: doc.documentId,
        locale: code,
        data,
        status: 'published',
      });
      changes.linked++;
    }
  }

  // 3 và 4 áp dụng cho mọi ngôn ngữ của các single type.
  const populateSections = (uid) => {
    const dz = strapi.contentTypes[uid].attributes.sections;
    const populate = (componentUid, depth = 0) => {
      if (depth > 5) return {};
      const schema = strapi.components[componentUid];
      const out = {};
      for (const [key, attr] of Object.entries(schema?.attributes || {})) {
        if (attr.type === 'media') out[key] = true;
        if (attr.type === 'component') out[key] = { populate: populate(attr.component, depth + 1) };
      }
      return out;
    };
    return {
      sections: {
        on: Object.fromEntries(dz.components.map((c) => [c, { populate: populate(c) }])),
      },
    };
  };
  const strip = (value) => {
    if (Array.isArray(value)) return value.map(strip);
    if (!value || typeof value !== 'object') return value;
    const out = {};
    for (const [key, item] of Object.entries(value)) {
      if (['id', 'documentId', 'createdAt', 'updatedAt', 'publishedAt'].includes(key)) continue;
      out[key] = key === 'media' && item ? item.id : strip(item);
    }
    return out;
  };

  for (const code of codes) {
    for (const [uid, key, apply] of [
      [
        'api::home-page.home-page',
        'homePage',
        (section) => {
          if (section.__component !== 'sections.services' || section.variant !== 'compact')
            return false;
          if (section.source) return false;
          section.source = 'parent';
          section.parentSlug = 'thiet-bi-va-giai-phap';
          return true;
        },
      ],
      [
        'api::projects-page.projects-page',
        'projectsPage',
        (section) => {
          if (section.__component !== 'sections.projects' || section.description) return false;
          section.description =
            {
              vi: 'Đồng hành cùng đối tác toàn cầu tối ưu hóa chuỗi cung ứng, hạ tầng kho bãi thông minh và gia tăng hiệu suất vận hành bền vững.',
              zh: '与全球伙伴携手优化供应链、智能仓储基础设施，并持续提升运营效率。',
            }[code] ||
            'We work with global partners to optimise supply chains, smart warehousing infrastructure and sustainable operating performance.';
          return true;
        },
      ],
      [
        'api::services-page.services-page',
        'servicesPage',
        (section) => {
          if (section.__component !== 'sections.services' || section.variant !== 'groups')
            return false;
          if (section.source) return false;
          section.source = 'roots';
          return true;
        },
      ],
    ]) {
      const store = strapi.documents(uid);
      const doc = await store.findFirst({ locale: code, populate: populateSections(uid) });
      if (!doc) continue;
      const sections = strip(doc.sections || []);
      let touched = false;
      for (const section of sections) if (apply(section)) touched = true;
      if (touched) {
        await store.update({
          documentId: doc.documentId,
          locale: code,
          data: { sections },
          status: 'published',
        });
        changes[key]++;
      }
    }

    // Mục dịch vụ gốc tạo ở lần chạy trước có thể còn sót chữ tiếng Anh vì thiếu từ điển.
    if (code !== SOURCE_LOCALE) {
      const english = rootServices(SOURCE_LOCALE);
      for (const root of rootServices(code)) {
        const origin = english.find((r) => r.slug === root.slug);
        const doc = await services.findFirst({
          filters: { slug: root.slug },
          locale: code,
          populate: populateSections('api::service.service'),
        });
        if (!doc || !origin) continue;
        const sections = strip(doc.sections || []);
        let touched = false;
        sections.forEach((section, index) => {
          const from = origin.sections?.[index];
          const to = root.sections?.[index];
          if (!from || !to || from.__component !== section.__component) return;
          for (const [key, value] of Object.entries(to)) {
            if (key === '__component' || typeof value !== 'string') continue;
            if (section[key] === from[key] && section[key] !== value) {
              section[key] = value;
              touched = true;
            }
          }
        });
        if (touched) {
          await services.update({
            documentId: doc.documentId,
            locale: code,
            data: { sections },
            status: 'published',
          });
          changes.rootText = (changes.rootText || 0) + 1;
        }
      }
    }

    // Khối Đánh giá khách hàng mới của trang Dịch vụ, chèn trước thư viện ảnh.
    {
      const uid = 'api::services-page.services-page';
      const store = strapi.documents(uid);
      const doc = await store.findFirst({ locale: code, populate: populateSections(uid) });
      const seeded = localizeContent(CONTENT, code);
      const source = (seeded.content || seeded).pages['services-page'].sections.find(
        (s) => s.__component === 'sections.testimonials',
      );
      if (doc && source) {
        const sections = strip(doc.sections || []);
        if (!sections.some((s) => s.__component === 'sections.testimonials')) {
          const at = sections.findIndex((s) => s.__component === 'sections.gallery');
          sections.splice(at < 0 ? sections.length : at, 0, await withMedia(strapi, source));
          await store.update({
            documentId: doc.documentId,
            locale: code,
            data: { sections },
            status: 'published',
          });
          changes.testimonials = (changes.testimonials || 0) + 1;
        }
      }
    }

    // Thẻ hỗ trợ tư vấn trang Tin tức đổi sang bố cục mới: ảnh trên, hotline và nút bên dưới.
    {
      const uid = 'api::news-page.news-page';
      const store = strapi.documents(uid);
      const doc = await store.findFirst({ locale: code, populate: populateSections(uid) });
      const seeded = localizeContent(CONTENT, code);
      const source = (seeded.content || seeded).pages['news-page'].sections.find(
        (s) => s.__component === 'sections.news' && s.promo,
      );
      if (doc && source) {
        const sections = strip(doc.sections || []);
        const target = sections.find((s) => s.__component === 'sections.news' && s.promo);
        if (target && !target.promo.highlight) {
          target.promo = {
            ...target.promo,
            ...(await withMedia(strapi, { ...source.promo, image: undefined })),
            image: target.promo.image,
          };
          await store.update({
            documentId: doc.documentId,
            locale: code,
            data: { sections },
            status: 'published',
          });
          changes.newsPromo = (changes.newsPromo || 0) + 1;
        }
      }
    }

    // Trang dự án kết bằng dải kêu gọi nền tối.
    {
      const projects = strapi.documents('api::project.project');
      const seeded = localizeContent(CONTENT, code);
      const source = (seeded.content || seeded).projects[0].sections.find(
        (s) => s.__component === 'sections.cta-bar',
      );
      const docs = await projects.findMany({
        locale: code,
        populate: populateSections('api::project.project'),
        limit: 1000,
      });
      for (const doc of docs) {
        const sections = strip(doc.sections || []);
        if (!source || sections.some((s) => s.__component === 'sections.cta-bar')) continue;
        sections.push(await withMedia(strapi, source));
        await projects.update({
          documentId: doc.documentId,
          locale: code,
          data: { sections },
          status: 'published',
        });
        changes.projectCta = (changes.projectCta || 0) + 1;
      }
    }

    const header = strapi.documents('api::header.header');
    const doc = await header.findFirst({
      locale: code,
      populate: { menu: { populate: { links: true } } },
    });
    if (doc) {
      const menu = strip(doc.menu || []);
      let touched = false;
      for (const item of menu)
        if (item.source === 'service-groups') {
          item.source = 'services';
          touched = true;
        }
      if (touched) {
        await header.update({
          documentId: doc.documentId,
          locale: code,
          data: { menu },
          status: 'published',
        });
        changes.header++;
      }
    }
  }

  strapi.log.info(`Migration V1 tree complete: ${JSON.stringify(changes)}`);
  return changes;
}

module.exports = { migrate };

if (require.main === module) {
  (async () => {
    const ROOT = path.resolve(__dirname, '..');
    process.chdir(ROOT);
    process.env.TOPWELL_SEED_CLI = 'true';
    process.env.STRAPI_TELEMETRY_DISABLED = 'true';
    const { createStrapi } = require('@strapi/strapi');
    const app = createStrapi({ appDir: ROOT, distDir: ROOT });
    try {
      await app.load();
      await migrate(app);
    } finally {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      await app.destroy().catch(() => {});
    }
  })().catch((error) => {
    console.error(error);
    process.exit(1);
  });
}
