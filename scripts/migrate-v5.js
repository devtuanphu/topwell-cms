'use strict';
/**
 * Dựng lại cây Dịch vụ và Dự án đúng bản Figma "Website Redesign V1" (I7AI3bFueHVCpfJetnSWsZ):
 *
 *   Dịch vụ
 *     Thiết bị và giải pháp      › Thiết bị · Dây chuyền sản xuất · Dự án chìa khóa trao tay
 *     Phụ tùng và linh kiện      › Cung cấp phụ tùng thay thế · Hỗ trợ kỹ thuật & giải pháp linh kiện
 *   Dự án
 *     Oulide – ADA & Smart Warehouse · Tongjun – Environmental New Materials
 *
 * Việc script làm:
 *   1. Xóa các mục của cây cũ (nhánh Logistics, các dịch vụ và dự án mẫu trước đây).
 *   2. Seed lại toàn bộ Dịch vụ và Dự án theo bộ seed, cả ba ngôn ngữ.
 *   3. Chân trang, menu đầu trang và nút ở hero trang chủ trỏ đúng trang mới.
 *
 * Chạy: npm run migrate:v5   (nên sao lưu .tmp/data.db trước)
 */
const path = require('node:path');
const { LOCALES, SOURCE_LOCALE } = require('../src/locales');
const { CONTENT, seed, localizeContent } = require('./seed');

const LEGACY = {
  'api::service.service': [
    'production-lines',
    'machinery',
    'spare-parts-molds',
    'technical-services',
    'van-chuyen-hang-hoa',
    'van-tai-duong-bien',
    'van-tai-hang-khong',
    'van-tai-duong-sat',
    'phan-phoi-kho-hang',
    'thu-tuc-hai-quan',
    'logistics-va-chuoi-cung-ung',
  ],
  'api::project.project': [
    'tu-dong-hoa-day-chuyen-fdi',
    'trung-tam-gia-cong-5-truc',
    'khuon-ep-nhua-y-te',
    'hieu-chuan-laser',
    'kho-thong-minh-asrs',
    'co-khi-phu-pvd',
  ],
};

const HERO_LINKS = {
  '/dich-vu/production-lines': '/dich-vu/thiet-bi-va-giai-phap/day-chuyen-san-xuat',
  '/dich-vu/phan-phoi-kho-hang': '/dich-vu',
};

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

/** Bỏ khóa hệ thống, đổi ảnh thành id để ghi lại mà không làm rơi dữ liệu. */
function strip(value) {
  if (Array.isArray(value)) return value.map(strip);
  if (!value || typeof value !== 'object') return value;
  const out = {};
  for (const [key, item] of Object.entries(value)) {
    if (['id', 'documentId', 'createdAt', 'updatedAt', 'publishedAt', 'locale'].includes(key))
      continue;
    if (['localizations', 'createdBy', 'updatedBy'].includes(key)) continue;
    out[key] = item && typeof item === 'object' && item.mime ? item.id : strip(item);
  }
  return out;
}

async function migrate(strapi) {
  const changes = { deleted: 0, footer: 0, header: 0, hero: 0 };
  const codes = [SOURCE_LOCALE, ...LOCALES.map((l) => l.code).filter((c) => c !== SOURCE_LOCALE)];

  // 1. Xóa cây cũ ở mọi ngôn ngữ: mục con trước, mục gốc sau.
  for (const [uid, slugs] of Object.entries(LEGACY)) {
    const store = strapi.documents(uid);
    for (const slug of slugs) {
      const ids = new Set();
      for (const code of codes) {
        const found = await store.findMany({ filters: { slug }, locale: code, fields: ['slug'] });
        found.forEach((doc) => ids.add(doc.documentId));
      }
      for (const documentId of ids) {
        // Không truyền locale thì Strapi 5 chỉ xóa bản ngôn ngữ mặc định.
        await store.delete({ documentId, locale: '*' });
        changes.deleted++;
      }
    }
  }

  // 2. Seed lại Dịch vụ và Dự án.
  const stats = await seed(strapi, { replace: true, only: new Set(['services', 'projects']) });

  for (const code of codes) {
    const localized = code === SOURCE_LOCALE ? CONTENT : localizeContent(CONTENT, code).content;

    // 3a. Hai cột Dự án và Dịch vụ ở chân trang.
    {
      const uid = 'api::footer.footer';
      const store = strapi.documents(uid);
      const doc = await store.findFirst({ locale: code, populate: populate(strapi, uid) });
      if (doc?.columns?.length >= 2) {
        const columns = strip(doc.columns);
        columns[0].links = strip(localized.footer.columns[0].links);
        columns[1].links = strip(localized.footer.columns[1].links);
        await store.update({
          documentId: doc.documentId,
          locale: code,
          data: { columns },
          status: 'published',
        });
        changes.footer++;
      }
    }

    // 3b. Menu đầu trang: Dịch vụ và Dự án mở menu con nhiều tầng lấy từ cây.
    {
      const uid = 'api::header.header';
      const store = strapi.documents(uid);
      const doc = await store.findFirst({ locale: code, populate: populate(strapi, uid) });
      if (doc?.menu?.length) {
        const menu = strip(doc.menu);
        let touched = false;
        for (const item of menu) {
          const next =
            item.source === 'services-all'
              ? 'services'
              : item.source === 'projects-all'
                ? 'projects'
                : item.href === '/du-an' && (!item.source || item.source === 'none')
                  ? 'projects'
                  : item.href === '/dich-vu' && (!item.source || item.source === 'none')
                    ? 'services'
                    : item.source;
          if (next !== item.source) {
            item.source = next;
            touched = true;
          }
        }
        if (touched) {
          await store.update({
            documentId: doc.documentId,
            locale: code,
            data: { menu },
            status: 'published',
          });
          changes.header++;
        }
      }
    }

    // 3c. Nút trên hero trang chủ.
    {
      const uid = 'api::home-page.home-page';
      const store = strapi.documents(uid);
      const doc = await store.findFirst({ locale: code, populate: populate(strapi, uid) });
      if (doc) {
        const sections = strip(doc.sections || []);
        let touched = false;
        const visit = (value) => {
          if (Array.isArray(value)) return value.forEach(visit);
          if (!value || typeof value !== 'object') return;
          for (const [key, item] of Object.entries(value)) {
            if (typeof item === 'string' && /href$/i.test(key) && HERO_LINKS[item]) {
              value[key] = HERO_LINKS[item];
              touched = true;
            } else visit(item);
          }
        };
        visit(sections);
        if (touched) {
          await store.update({
            documentId: doc.documentId,
            locale: code,
            data: { sections },
            status: 'published',
          });
          changes.hero++;
        }
      }
    }
  }

  strapi.log.info(`Migration V5 tree complete: ${JSON.stringify({ ...changes, ...stats })}`);
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
