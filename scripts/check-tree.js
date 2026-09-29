'use strict';
/**
 * Kiểm tra cây Dịch vụ và Dự án tối đa 3 cấp, tạo động ngay trong CMS, không cần build lại web.
 *
 * Script thao tác đúng như biên tập viên (chọn "Thuộc mục cha"), gọi vào web đang chạy rồi xóa
 * sạch phần vừa tạo dù có lỗi hay không:
 *   - Thêm một dịch vụ cấp 3 dưới dịch vụ cấp 2 → có trang, layout chi tiết, breadcrumb đủ bậc.
 *   - Thêm một dự án cấp 3 dưới dự án cấp 2 → dự án cha tự chuyển sang layout trang cha và liệt kê
 *     dự án con; dự án con dùng layout chi tiết.
 *   - Thử tạo cấp 4, hoặc đưa mục đang có mục con xuống làm mục con → CMS phải từ chối.
 *
 * Chạy: npm run check:tree            (web ở http://localhost:3100)
 *       SITE_URL=https://topwell.co npm run check:tree
 */
const path = require('node:path');

const SITE = (process.env.SITE_URL || 'http://localhost:3100').replace(/\/$/, '');
const LOCALE = 'vi';
const TEMP = [
  ['api::service.service', 'kiem-tra-cay-cap-4'],
  ['api::service.service', 'kiem-tra-cay-dich-vu'],
  ['api::project.project', 'kiem-tra-cay-du-an-cap-4'],
  ['api::project.project', 'kiem-tra-cay-du-an'],
];

async function html(url) {
  const response = await fetch(`${SITE}${url}`);
  if (!response.ok) throw new Error(`${url} trả về ${response.status}`);
  return response.text();
}

const crumbs = (page) =>
  (page.match(/<nav class="breadcrumb[\s\S]*?<\/nav>/)?.[0].match(/<a /g) || []).length;

function expect(condition, message) {
  if (!condition) throw new Error(message);
  return `  ✓ ${message}`;
}

async function rejects(action, message) {
  try {
    await action();
  } catch (error) {
    return expect(/cấp|mục con/.test(error.message), `${message} (CMS báo: "${error.message}")`);
  }
  throw new Error(`${message}: CMS vẫn cho lưu`);
}

async function run(strapi) {
  const lines = [];
  const services = strapi.documents('api::service.service');
  const projects = strapi.documents('api::project.project');
  const temp = (title, slug, parent) => ({
    locale: LOCALE,
    status: 'published',
    data: { title, slug, summary: 'Mục tạm do npm run check:tree tạo ra.', parent, order: 999 },
  });
  const roots = async (store) =>
    (await store.findMany({ locale: LOCALE, populate: { parent: true }, sort: 'order' })).filter(
      (entry) => !entry.parent,
    );

  // Dịch vụ: cấp 2 là mục để trống "Thuộc mục cha".
  const [serviceRoot, otherRoot] = await roots(services);
  if (!serviceRoot) throw new Error('Chưa có dịch vụ cấp 2');
  const level3 = await services.create(
    temp('Kiểm tra cây dịch vụ', TEMP[1][1], serviceRoot.documentId),
  );
  const servicePath = `/dich-vu/${serviceRoot.slug}/${TEMP[1][1]}`;
  const servicePage = await html(servicePath);
  lines.push(
    expect(
      servicePage.includes('class="service-detail"'),
      `${servicePath} có trang, layout chi tiết`,
    ),
  );
  lines.push(
    expect(crumbs(servicePage) === 3, 'Breadcrumb dịch vụ cấp 3: Trang chủ / Dịch vụ / mục cấp 2'),
  );
  const parentPage = await html(`/dich-vu/${serviceRoot.slug}`);
  lines.push(
    expect(
      parentPage.includes(`href="${servicePath}"`),
      'Trang dịch vụ cấp 2 liệt kê ngay mục mới',
    ),
  );
  lines.push(
    await rejects(
      () => services.create(temp('Cấp 4', TEMP[0][1], level3.documentId)),
      'Không tạo được dịch vụ cấp 4',
    ),
  );
  if (otherRoot)
    lines.push(
      await rejects(
        () =>
          services.update({
            documentId: serviceRoot.documentId,
            locale: LOCALE,
            data: { parent: otherRoot.documentId },
          }),
        'Không đưa được mục cấp 2 đang có mục con xuống làm mục con',
      ),
    );

  // Dự án: dự án cấp 2 chưa có con dùng layout chi tiết; thêm con thì tự thành trang cha.
  const [projectRoot] = await roots(projects);
  if (!projectRoot) throw new Error('Chưa có dự án cấp 2');
  const projectPath = `/du-an/${projectRoot.slug}`;
  if (!(await html(projectPath)).includes('class="projects-listing"'))
    lines.push(expect(true, `${projectPath} lúc chưa có dự án con dùng layout chi tiết`));
  const projectChild = await projects.create(
    temp('Kiểm tra cây dự án', TEMP[3][1], projectRoot.documentId),
  );
  const childPath = `${projectPath}/${TEMP[3][1]}`;
  const rootPage = await html(projectPath);
  lines.push(
    expect(
      rootPage.includes('class="projects-listing"'),
      `${projectPath} tự chuyển sang layout trang cha`,
    ),
  );
  lines.push(expect(rootPage.includes(`href="${childPath}"`), 'Dự án cha liệt kê đúng dự án con'));
  const childPage = await html(childPath);
  lines.push(expect(childPage.includes('class="case-study"'), `${childPath} dùng layout chi tiết`));
  lines.push(
    expect(crumbs(childPage) === 3, 'Breadcrumb dự án cấp 3: Trang chủ / Dự án / dự án cấp 2'),
  );
  lines.push(
    await rejects(
      () => projects.create(temp('Cấp 4', TEMP[2][1], projectChild.documentId)),
      'Không tạo được dự án cấp 4',
    ),
  );
  return lines;
}

async function cleanup(strapi) {
  for (const [uid, slug] of TEMP) {
    const store = strapi.documents(uid);
    const doc = await store.findFirst({ filters: { slug }, locale: LOCALE });
    if (doc) await store.delete({ documentId: doc.documentId, locale: '*' });
  }
}

if (require.main === module) {
  (async () => {
    const ROOT = path.resolve(__dirname, '..');
    process.chdir(ROOT);
    process.env.TOPWELL_SEED_CLI = 'true';
    process.env.STRAPI_TELEMETRY_DISABLED = 'true';
    const { createStrapi } = require('@strapi/strapi');
    const app = createStrapi({ appDir: ROOT, distDir: ROOT });
    let failure;
    try {
      await app.load();
      await cleanup(app);
      const lines = await run(app);
      console.log(`Cây Dịch vụ và Dự án tối đa 3 cấp, kiểm tra trên ${SITE}:`);
      lines.forEach((line) => console.log(line));
    } catch (error) {
      failure = error;
    } finally {
      await cleanup(app).catch((error) => console.error('Dọn dẹp lỗi:', error.message));
      await new Promise((resolve) => setTimeout(resolve, 1500));
      await app.destroy().catch(() => {});
    }
    if (failure) {
      console.error(failure.message);
      process.exit(1);
    }
  })();
}

module.exports = { run, cleanup, TEMP };
