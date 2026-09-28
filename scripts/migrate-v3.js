'use strict';
/**
 * Cập nhật dữ liệu sẵn có theo bản Figma "Website Redesign V1 (3)".
 *
 * Script chỉ sửa đúng những phần thiết kế đã đổi, không ghi đè nội dung biên tập viên nhập:
 *   1. Trang Dịch vụ: khối "Dịch vụ" chuyển sang kiểu thẻ nhóm (variant `groups`).
 *   2. Trang Giới thiệu: bỏ khối "Ban lãnh đạo" (sections.team) vì thiết kế mới không còn.
 *
 * Nhóm dịch vụ mới được nhập bằng: npm run seed -- --only=serviceGroups
 *
 * Chạy: npm run migrate:v3
 */
const { LOCALES } = require('../src/locales');
const { CONTENT, localizeContent } = require('./seed');

/** Nội dung mẫu cho banner trang chủ, lấy từ bộ seed và khớp theo link của nút chính. */
function heroCopy(code) {
  const localized = localizeContent(CONTENT, code);
  const content = localized.content || localized;
  const hero = content.pages['home-page'].sections.find(
    (s) => s.__component === 'sections.hero-slider',
  );
  return new Map((hero?.cards || []).map((card) => [card.href, card]));
}

async function migrate(strapi) {
  const changes = { servicesPage: 0, aboutPage: 0, siteSettings: 0, homePage: 0 };
  // Chuỗi mới của bản V1 (3); chỉ điền khi ô còn trống.
  const NEW_COPY = {
    vi: { serviceGroupBase: '/dich-vu/nhom/', exploreDetail: 'Khám phá chi tiết' },
    en: { serviceGroupBase: '/dich-vu/nhom/', exploreDetail: 'Explore details' },
    zh: { serviceGroupBase: '/dich-vu/nhom/', exploreDetail: '查看详情' },
  };

  const populateSections = (uid) => {
    const dz = strapi.contentTypes[uid].attributes.sections;
    const populate = (componentUid, depth = 0) => {
      if (depth > 5) return {};
      const schema = strapi.components[componentUid];
      const out = {};
      for (const [key, attr] of Object.entries(schema?.attributes || {})) {
        if (attr.type === 'media') out[key] = true;
        if (attr.type === 'component')
          out[key] = { populate: populate(attr.component, depth + 1) };
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

  for (const { code } of LOCALES) {
    const services = strapi.documents('api::services-page.services-page');
    const servicesPage = await services.findFirst({
      locale: code,
      populate: populateSections('api::services-page.services-page'),
    });
    if (servicesPage) {
      const sections = strip(servicesPage.sections || []);
      let touched = false;
      for (const section of sections)
        if (section.__component === 'sections.services' && section.variant !== 'groups') {
          section.variant = 'groups';
          touched = true;
        }
      if (touched) {
        await services.update({
          documentId: servicesPage.documentId,
          locale: code,
          data: { sections },
          status: 'published',
        });
        changes.servicesPage++;
      }
    }

    // Banner trang chủ: điền dòng chữ vàng và nút phụ của thiết kế mới vào các ô còn trống.
    const home = strapi.documents('api::home-page.home-page');
    const homePage = await home.findFirst({
      locale: code,
      populate: populateSections('api::home-page.home-page'),
    });
    if (homePage) {
      const sections = strip(homePage.sections || []);
      const copy = heroCopy(code);
      let touched = false;
      for (const section of sections) {
        if (section.__component !== 'sections.hero-slider') continue;
        for (const card of section.cards || []) {
          const source = copy.get(card.href);
          if (!source) continue;
          if (!card.eyebrow && source.eyebrow) {
            card.eyebrow = source.eyebrow;
            touched = true;
          }
          if (!card.secondaryLabel && source.secondaryLabel) {
            card.secondaryLabel = source.secondaryLabel;
            card.secondaryHref = card.secondaryHref || source.secondaryHref;
            touched = true;
          }
        }
      }
      if (touched) {
        await home.update({
          documentId: homePage.documentId,
          locale: code,
          data: { sections },
          status: 'published',
        });
        changes.homePage++;
      }
    }

    const settings = strapi.documents('api::site-settings.site-settings');
    const copy = await settings.findFirst({
      locale: code,
      populate: { routes: true, common: true },
    });
    if (copy) {
      const text = NEW_COPY[code] || NEW_COPY.en;
      const routes = strip(copy.routes || {});
      const common = strip(copy.common || {});
      let touched = false;
      if (!routes.serviceGroupBase) {
        routes.serviceGroupBase = text.serviceGroupBase;
        touched = true;
      }
      if (!common.exploreDetail) {
        common.exploreDetail = text.exploreDetail;
        touched = true;
      }
      if (touched) {
        await settings.update({
          documentId: copy.documentId,
          locale: code,
          data: { routes, common },
          status: 'published',
        });
        changes.siteSettings++;
      }
    }

    const about = strapi.documents('api::about-page.about-page');
    const aboutPage = await about.findFirst({
      locale: code,
      populate: populateSections('api::about-page.about-page'),
    });
    if (aboutPage) {
      const sections = strip(aboutPage.sections || []);
      const kept = sections.filter((s) => s.__component !== 'sections.team');
      if (kept.length !== sections.length) {
        await about.update({
          documentId: aboutPage.documentId,
          locale: code,
          data: { sections: kept },
          status: 'published',
        });
        changes.aboutPage++;
      }
    }
  }

  strapi.log.info(`Migration V1 (3) complete: ${JSON.stringify(changes)}`);
  return changes;
}

module.exports = { migrate };

if (require.main === module) {
  (async () => {
    const path = require('node:path');
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
      // Strapi 5 gửi sự kiện document qua callback onCommit không await; chờ chúng xong rồi mới đóng.
      await new Promise((resolve) => setTimeout(resolve, 2000));
      await app.destroy().catch(() => {});
    }
  })().catch((error) => {
    console.error(error);
    process.exit(1);
  });
}
