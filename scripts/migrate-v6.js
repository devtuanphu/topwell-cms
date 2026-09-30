'use strict';
/**
 * Rà lại toàn bộ trang theo Figma "Website Redesign V1" (I7AI3bFueHVCpfJetnSWsZ):
 *
 *   1. Câu chữ: áp bảng scripts/data/figma-copy-v6.json (tạo bằng build-copy-diff.js). Một ô chỉ
 *      được ghi đè khi vẫn giữ nguyên giá trị seed cũ, nên chỗ biên tập viên đã sửa tay giữ nguyên.
 *      Ô bị bỏ trong thiết kế mới (thẻ phụ khối kêu gọi, nhãn khối công ty) được xóa trắng.
 *   2. Khối Dịch vụ có ô Mô tả mới: điền từ seed khi còn trống.
 *   3. Icon SVG đã tải lên còn màu hổ phách cũ: ghi đè nội dung file bằng bản màu vàng #F1DF57
 *      (giữ nguyên URL, không cần tải lại).
 *   4. Logo đầu trang bị gán nhầm sang icon khối công ty: trả về logo TOP WELL.
 *
 * Chạy: npm run migrate:v6   (nên sao lưu .tmp/data.db và public/uploads trước)
 */
const crypto = require('node:crypto');
const fs = require('node:fs');
const path = require('node:path');
const { LOCALES } = require('../src/locales');
const { CONTENT, localizeContent } = require('./seed');

const ROOT = path.resolve(__dirname, '..');
const COPY = require('./data/figma-copy-v6.json');
const ICONS = require('./data/recoloured-icons.json');

function populate(strapi, uid) {
  const schema = strapi.contentTypes[uid] || strapi.components[uid];
  const result = {};
  for (const [key, attr] of Object.entries(schema.attributes)) {
    if (attr.type === 'media') result[key] = true;
    if (attr.type === 'component') result[key] = { populate: populate(strapi, attr.component) };
    if (attr.type === 'dynamiczone')
      result[key] = {
        on: Object.fromEntries(attr.components.map((c) => [c, { populate: populate(strapi, c) }])),
      };
  }
  return result;
}

/** Bỏ khóa hệ thống, ảnh đổi thành id để ghi lại không làm rơi dữ liệu. */
function strip(value, top = true) {
  if (Array.isArray(value)) return value.map((item) => strip(item, false));
  if (!value || typeof value !== 'object') return value;
  if (value.mime) return value.id;
  const out = {};
  for (const [key, item] of Object.entries(value)) {
    if (key === 'id') continue;
    // Khóa hệ thống chỉ nằm ở cấp tài liệu; trong component, "locale" là ô dữ liệu thật.
    if (
      top &&
      ['documentId', 'createdAt', 'updatedAt', 'publishedAt', 'locale', 'localizations'].concat(
        ['createdBy', 'updatedBy', 'parent', 'children'],
      ).includes(key)
    )
      continue;
    out[key] = strip(item, false);
  }
  return out;
}

const at = (value, p) => p.reduce((v, k) => (v == null ? undefined : v[k]), value);
function set(value, p, to) {
  const parent = at(value, p.slice(0, -1));
  if (parent && typeof parent === 'object') parent[p[p.length - 1]] = to;
}
/** Tìm mọi ô cùng tên có đúng giá trị cũ (khi thứ tự khối trong dữ liệu khác seed). */
function findAll(value, key, from, prefix = [], out = []) {
  if (Array.isArray(value)) value.forEach((v, i) => findAll(v, key, from, [...prefix, i], out));
  else if (value && typeof value === 'object')
    for (const [k, v] of Object.entries(value)) {
      if (k === key && v === from) out.push([...prefix, k]);
      else findAll(v, key, from, [...prefix, k], out);
    }
  return out;
}

function applyCopy(data, changes) {
  let touched = 0;
  for (const { path: p, from, to } of changes) {
    const current = at(data, p);
    if (current === from || (from === null && (current === undefined || current === null))) {
      if (current !== to) {
        set(data, p, to);
        touched++;
      }
      continue;
    }
    if (from === null) continue;
    for (const q of findAll(data, p[p.length - 1], from)) {
      set(data, q, to);
      touched++;
    }
  }
  return touched;
}

async function migrate(strapi) {
  const stats = { copy: 0, docs: 0, filled: 0, icons: 0, headerLogo: 0 };
  const codes = LOCALES.map((l) => l.code);

  // 1. Câu chữ theo bảng so sánh seed cũ – mới.
  for (const code of codes) {
    for (const [key, changes] of Object.entries(COPY[code] || {})) {
      const [group, slug] = key.includes(':') ? key.split(':') : [null, key];
      const uid = group ? `api::${group.slice(0, -1)}.${group.slice(0, -1)}` : `api::${key}.${key}`;
      if (!strapi.contentTypes[uid]) continue;
      const store = strapi.documents(uid);
      const doc = await store.findFirst({
        locale: code,
        ...(group ? { filters: { slug } } : {}),
        populate: populate(strapi, uid),
      });
      if (!doc) continue;
      const data = strip(doc);
      let touched = applyCopy(data, changes);
      // Khối kêu gọi không còn thẻ phụ bên phải thì bỏ luôn các dòng của thẻ đó.
      for (const section of data.sections || [])
        if (section.__component === 'sections.cta' && !section.panelTitle && section.cards?.length) {
          section.cards = [];
          section.panelIcon = null;
          touched++;
        }
      if (!touched) continue;
      if (uid === 'api::header.header' && data.logo && typeof data.logo === 'object')
        data.logo = data.logo.id;
      await store.update({ documentId: doc.documentId, locale: code, data, status: 'published' });
      stats.copy += touched;
      stats.docs++;
    }
  }

  // 2. Ô Mô tả mới của khối Dịch vụ.
  for (const code of codes) {
    const localized = localizeContent(CONTENT, code);
    const pages = (localized.content || localized).pages;
    for (const name of ['services-page', 'home-page']) {
      const uid = `api::${name}.${name}`;
      const source = pages[name].sections.filter((s) => s.__component === 'sections.services');
      const store = strapi.documents(uid);
      const doc = await store.findFirst({ locale: code, populate: populate(strapi, uid) });
      if (!doc) continue;
      const sections = strip(doc.sections || []);
      let touched = false;
      sections
        .filter((s) => s.__component === 'sections.services')
        .forEach((section, i) => {
          if (!section.description && source[i]?.description) {
            section.description = source[i].description;
            touched = true;
          }
        });
      if (touched) {
        await store.update({ documentId: doc.documentId, locale: code, data: { sections }, status: 'published' });
        stats.filled++;
      }
    }
  }

  // 3. Icon đã tải lên: ghi đè nội dung bằng bản đổi màu.
  const files = strapi.db.query('plugin::upload.file');
  for (const [oldDigest, { file }] of Object.entries(ICONS)) {
    const upload = await files.findOne({ where: { name: `topwell-seed-${oldDigest}.svg` } });
    if (!upload?.url?.startsWith('/uploads/')) continue;
    const target = path.join(ROOT, 'public', upload.url);
    const content = fs.readFileSync(path.join(ROOT, 'seed-assets', file));
    if (fs.existsSync(target) && !fs.readFileSync(target).equals(content)) {
      fs.writeFileSync(target, content);
      stats.icons++;
    }
  }

  // 4. Logo đầu trang: file logo TOP WELL mà seed khai báo.
  const logoFile = path.join(ROOT, 'seed-assets', CONTENT.header.logo.$file);
  const digest = crypto.createHash('sha256').update(fs.readFileSync(logoFile)).digest('hex');
  const logo = await files.findOne({ where: { name: `topwell-seed-${digest}${path.extname(logoFile)}` } });
  if (logo) {
    const header = strapi.documents('api::header.header');
    for (const code of codes) {
      const doc = await header.findFirst({ locale: code, populate: { logo: true } });
      if (doc && doc.logo?.id !== logo.id) {
        await header.update({ documentId: doc.documentId, locale: code, data: { logo: logo.id }, status: 'published' });
        stats.headerLogo++;
      }
    }
  }

  strapi.log.info(`Migration V6 Figma copy complete: ${JSON.stringify(stats)}`);
  return stats;
}

module.exports = { migrate };

if (require.main === module) {
  (async () => {
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
