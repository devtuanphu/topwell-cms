'use strict';
/**
 * Bài viết có ô "Nội dung chính" (CKEditor) để biên tập viên viết bài tự do, chuẩn SEO.
 *
 *   Các khối "Nội dung tự do (CKEditor)" đang nằm trong danh sách khối được gộp vào ô mới. Chỗ của
 *   các khối khác (mở đầu có ảnh, các bước, bảng so sánh, FAQ) thành dòng [[khoi-N]], nên bài hiển
 *   thị y như trước. Bài đã có Nội dung chính thì bỏ qua, chạy lại nhiều lần vẫn an toàn.
 *
 * Chạy: npm run migrate:v7   (nên sao lưu .tmp/data.db trước)
 */
const path = require('node:path');
const { LOCALES } = require('../src/locales');
const { inlineArticleBlocks } = require('./seed');
const { populate, strip } = require('./migrate-v6');

const ROOT = path.resolve(__dirname, '..');
const UID = 'api::article.article';

async function migrate(strapi) {
  const stats = { articles: 0, skipped: 0 };
  const store = strapi.documents(UID);
  for (const { code } of LOCALES) {
    const docs = await store.findMany({ locale: code, populate: populate(strapi, UID) });
    for (const doc of docs) {
      const sections = strip(doc.sections || []);
      if (doc.content || !sections.some((s) => s.__component === 'sections.rich-text')) {
        stats.skipped++;
        continue;
      }
      await store.update({
        documentId: doc.documentId,
        locale: code,
        data: inlineArticleBlocks(sections),
        status: 'published',
      });
      stats.articles++;
    }
  }
  strapi.log.info(`Migration V7 article content complete: ${JSON.stringify(stats)}`);
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
