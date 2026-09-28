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
const crypto = require('node:crypto');
const fs = require('node:fs');
const path = require('node:path');
const { LOCALES } = require('../src/locales');
const { CONTENT, localizeContent } = require('./seed');

/**
 * Nhãn đầu mục bản mock trước đây là một câu dài đặt dưới tiêu đề. Ảnh tham chiếu trong
 * Figma (191:1564) dùng nhãn ngắn viết hoa đặt trên tiêu đề, nên các câu này được thay lại.
 */
const LEGACY_EYEBROWS = new Set([
  'Connecting smart factories, logistics hubs and the mechanical supply chain.',
  'Multi-axis CNC, automated lines and precision tooling from leading manufacturers.',
  'Sea, air, rail and road freight with smart warehousing across 150+ countries.',
  'International equipment partners and engineers with you from survey to handover.',
  'Kết nối nhà máy thông minh, logistics hub và chuỗi cung ứng cơ khí.',
  'Máy CNC đa trục, dây chuyền tự động và khuôn mẫu chính xác từ các nhà sản xuất hàng đầu.',
  'Vận tải biển, hàng không, đường sắt và đường bộ cùng kho thông minh tại hơn 150 quốc gia.',
  'Đối tác thiết bị quốc tế và đội ngũ kỹ sư đồng hành từ khảo sát đến bàn giao.',
  '连接智能工厂、物流枢纽与机械供应链。',
  '来自一流制造商的多轴 CNC、自动化产线与精密模具。',
  '海运、空运、铁路与公路运输，并在 150 多个国家提供智能仓储。',
  '国际设备伙伴与工程师团队，从勘察到交付全程相伴。',
]);

/** Tìm ảnh đã có trong Media Library theo tên mà bộ seed đặt (không upload lại). */
async function findSeedMedia(strapi, file) {
  const filepath = path.join(process.env.SEED_ASSETS_DIR || 'seed-assets', file);
  if (!fs.existsSync(filepath)) return null;
  const digest = crypto.createHash('sha256').update(fs.readFileSync(filepath)).digest('hex');
  const name = `topwell-seed-${digest}${path.extname(filepath).toLowerCase()}`;
  const found = await strapi.db.query('plugin::upload.file').findOne({ where: { name } });
  return found ? found.id : null;
}

/** Nội dung mẫu cho banner trang chủ, lấy từ bộ seed và khớp theo link của nút chính. */
function heroSection(code) {
  const localized = localizeContent(CONTENT, code);
  const tree = localized.content || localized;
  return tree.pages['home-page'].sections.find((s) => s.__component === 'sections.hero-slider');
}
function heroCopy(code) {
  return new Map((heroSection(code)?.cards || []).map((card) => [card.href, card]));
}

async function migrate(strapi) {
  const changes = { servicesPage: 0, aboutPage: 0, siteSettings: 0, homePage: 0, header: 0 };
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
      const heroSource = heroSection(code);
      for (const section of sections) {
        // Số mục hiển thị và nhóm dịch vụ trước đây gán cứng trong code.
        if (section.__component === 'sections.services' && section.variant === 'compact') {
          if (!section.group) {
            section.group = 'industrial';
            touched = true;
          }
          if (!section.limit) {
            section.limit = 3;
            touched = true;
          }
        }
        if (section.__component === 'sections.news' && !section.limit) {
          section.limit = 3;
          touched = true;
        }
        if (section.__component !== 'sections.hero-slider') continue;
        if (!section.slideSeconds && heroSource) {
          section.slideSeconds = heroSource.slideSeconds;
          touched = true;
        }
        if (!section.reviewLabel && heroSource) {
          section.reviewRating = heroSource.reviewRating;
          section.reviewLabel = heroSource.reviewLabel;
          const ids = [];
          for (const avatar of heroSource.reviewAvatars || []) {
            const id = await findSeedMedia(strapi, avatar.$file);
            if (id) ids.push({ media: id, alt: avatar.alt });
          }
          if (ids.length) section.reviewAvatars = ids;
          touched = true;
        }
        for (const card of section.cards || []) {
          const source = copy.get(card.href);
          if (!source) continue;
          if ((!card.eyebrow || LEGACY_EYEBROWS.has(card.eyebrow)) && source.eyebrow) {
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

    // Thanh menu: chuyển danh sách điều hướng cũ sang trường mới có menu con.
    const header = strapi.documents('api::header.header');
    const headerDoc = await header.findFirst({
      locale: code,
      populate: { navigation: true, menu: { populate: { links: true } } },
    });
    if (headerDoc && !(headerDoc.menu || []).length) {
      const source = { '/dich-vu': 'services', '/du-an': 'projects' };
      const menu = strip(headerDoc.navigation || []).map((item) => ({
        title: item.title,
        href: item.href,
        source: source[item.href] || 'none',
      }));
      if (menu.length) {
        await header.update({
          documentId: headerDoc.documentId,
          locale: code,
          data: { menu },
          status: 'published',
        });
        changes.header = (changes.header || 0) + 1;
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
