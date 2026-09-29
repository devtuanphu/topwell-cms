'use strict';
/**
 * Kiểm tra Dịch vụ và Dự án tạo được nhiều cấp ngay trong CMS, không cần build lại web.
 *
 * Script tạo tạm một nhánh ba cấp cho cả hai bộ sưu tập đúng như biên tập viên thao tác
 * (chọn "Thuộc mục cha"), gọi vào web đang chạy để kiểm tra đường dẫn, breadcrumb, layout
 * và danh sách mục con, rồi xóa sạch phần vừa tạo dù có lỗi hay không.
 *
 * Chạy: npm run check:tree            (web ở http://localhost:3100)
 *       SITE_URL=https://topwell.co npm run check:tree
 */
const path = require('node:path');

const SITE = (process.env.SITE_URL || 'http://localhost:3100').replace(/\/$/, '');
const LOCALE = 'vi';

/** Nhánh tạm: một mục Dịch vụ cấp ba và hai mục Dự án cấp hai, cấp ba. */
const TEMP = [
  ['api::service.service', 'kiem-tra-cay-dich-vu'],
  ['api::project.project', 'kiem-tra-cay-du-an-cap-2'],
  ['api::project.project', 'kiem-tra-cay-du-an-cap-3'],
];

const CHILD_LIST = (title) => ({
  __component: 'sections.projects',
  eyebrow: 'KIỂM TRA',
  title,
  source: 'children',
});

/** Populate sâu cho Dynamic Zone để không làm rơi ảnh khi ghi lại. */
function populateSections(strapi, uid) {
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
    sections: { on: Object.fromEntries(dz.components.map((c) => [c, { populate: populate(c) }])) },
  };
}

/** Bỏ khóa hệ thống để ghi lại Dynamic Zone mà không tạo bản sao lỗi. */
function strip(value) {
  if (Array.isArray(value)) return value.map(strip);
  if (!value || typeof value !== 'object') return value;
  const out = {};
  for (const [key, item] of Object.entries(value)) {
    if (['id', 'documentId', 'createdAt', 'updatedAt', 'publishedAt'].includes(key)) continue;
    out[key] = key === 'media' && item ? item.id : strip(item);
  }
  return out;
}

async function html(url) {
  const response = await fetch(`${SITE}${url}`);
  if (!response.ok) throw new Error(`${url} trả về ${response.status}`);
  return response.text();
}

function expect(condition, message) {
  if (!condition) throw new Error(message);
  return `  ✓ ${message}`;
}

async function run(strapi, state) {
  const services = strapi.documents('api::service.service');
  const projects = strapi.documents('api::project.project');
  const first = (store, slug) => store.findFirst({ filters: { slug }, locale: LOCALE });
  const lines = [];

  // Mục Dịch vụ cấp ba: con của một mục vốn đã là con của mục gốc.
  const roots = await services.findMany({ locale: LOCALE, populate: { parent: true }, limit: 500 });
  const branch = roots.find((s) => s.parent && roots.some((r) => r.slug === s.parent.slug));
  if (!branch) throw new Error('Chưa có mục Dịch vụ cấp hai để gắn thêm cấp ba');
  await services.create({
    locale: LOCALE,
    status: 'published',
    data: {
      title: 'Kiểm tra cây dịch vụ',
      slug: TEMP[0][1],
      summary: 'Mục tạm do npm run check:tree tạo ra.',
      parent: branch.documentId,
      order: 999,
    },
  });

  // Mục Dự án cấp hai và cấp ba, mỗi cấp cha kèm khối liệt kê mục con.
  const projectRoots = await projects.findMany({
    locale: LOCALE,
    populate: { parent: true },
    limit: 500,
  });
  const projectRoot = projectRoots.find((p) => !p.parent);
  if (!projectRoot) throw new Error('Chưa có dự án gốc để gắn thêm cấp hai');
  const stage = await projects.create({
    locale: LOCALE,
    status: 'published',
    data: {
      title: 'Kiểm tra cây dự án cấp 2',
      slug: TEMP[1][1],
      summary: 'Mục tạm do npm run check:tree tạo ra.',
      parent: projectRoot.documentId,
      order: 999,
      sections: [CHILD_LIST('Mục con cấp ba')],
    },
  });
  await projects.create({
    locale: LOCALE,
    status: 'published',
    data: {
      title: 'Kiểm tra cây dự án cấp 3',
      slug: TEMP[2][1],
      summary: 'Mục tạm do npm run check:tree tạo ra.',
      parent: stage.documentId,
      order: 999,
    },
  });
  const rootDoc = await projects.findOne({
    documentId: projectRoot.documentId,
    locale: LOCALE,
    populate: populateSections(strapi, 'api::project.project'),
  });
  const rootSections = strip(rootDoc.sections || []);
  // Ghi ngay vào state để phần dọn dẹp trả lại nguyên trạng kể cả khi kiểm tra thất bại.
  state.projectRoot = projectRoot.documentId;
  state.addedRootList = !rootSections.some((s) => s.__component === 'sections.projects');
  if (state.addedRootList) rootSections.push(CHILD_LIST('Mục con cấp hai'));
  await projects.update({
    documentId: projectRoot.documentId,
    locale: LOCALE,
    data: { sections: rootSections },
    status: 'published',
  });

  const servicePath = `/dich-vu/${branch.parent.slug}/${branch.slug}/${TEMP[0][1]}`;
  const stagePath = `/du-an/${projectRoot.slug}/${TEMP[1][1]}`;
  const leafPath = `${stagePath}/${TEMP[2][1]}`;

  const serviceLeaf = await html(servicePath);
  lines.push(
    expect(serviceLeaf.includes('class="service-detail"'), `${servicePath} dùng layout chi tiết`),
  );
  lines.push(
    expect(
      (serviceLeaf.match(/<nav class="breadcrumb[\s\S]*?<\/nav>/)?.[0].match(/<a /g) || [])
        .length === 4,
      'Breadcrumb dịch vụ cấp ba có đủ bốn liên kết tổ tiên',
    ),
  );

  const rootHtml = await html(`/du-an/${projectRoot.slug}`);
  lines.push(
    expect(
      rootHtml.includes('class="projects-listing"'),
      `/du-an/${projectRoot.slug} dùng layout trang cha`,
    ),
  );
  lines.push(
    expect(rootHtml.includes(`href="${stagePath}"`), 'Dự án gốc liệt kê đúng mục con của nó'),
  );

  const stageHtml = await html(stagePath);
  lines.push(
    expect(
      stageHtml.includes('class="projects-listing"'),
      `${stagePath} dùng lại layout trang cha`,
    ),
  );
  lines.push(
    expect(stageHtml.includes(`href="${leafPath}"`), 'Mục cấp hai liệt kê đúng mục con cấp ba'),
  );

  const leafHtml = await html(leafPath);
  lines.push(expect(leafHtml.includes('class="case-study"'), `${leafPath} dùng layout chi tiết`));
  lines.push(
    expect(
      (leafHtml.match(/<nav class="breadcrumb[\s\S]*?<\/nav>/)?.[0].match(/<a /g) || []).length ===
        4,
      'Breadcrumb dự án cấp ba có đủ bốn liên kết tổ tiên',
    ),
  );

  return lines;
}

async function cleanup(strapi, state) {
  for (const [uid, slug] of TEMP) {
    const store = strapi.documents(uid);
    const doc = await store.findFirst({ filters: { slug }, locale: LOCALE });
    if (doc) await store.delete({ documentId: doc.documentId });
  }
  if (state && state.addedRootList) {
    const projects = strapi.documents('api::project.project');
    const doc = await projects.findOne({
      documentId: state.projectRoot,
      locale: LOCALE,
      populate: populateSections(strapi, 'api::project.project'),
    });
    const sections = strip(doc.sections || []).filter((s) => s.__component !== 'sections.projects');
    await projects.update({
      documentId: state.projectRoot,
      locale: LOCALE,
      data: { sections },
      status: 'published',
    });
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
    const state = {};
    let failure;
    try {
      await app.load();
      const lines = await run(app, state);
      console.log(`Cây Dịch vụ và Dự án nhiều cấp, kiểm tra trên ${SITE}:`);
      lines.forEach((line) => console.log(line));
    } catch (error) {
      failure = error;
    } finally {
      await cleanup(app, state).catch((error) => console.error('Dọn dẹp lỗi:', error.message));
      await new Promise((resolve) => setTimeout(resolve, 1500));
      await app.destroy().catch(() => {});
    }
    if (failure) {
      console.error(failure.message);
      process.exit(1);
    }
  })();
}

module.exports = { run, cleanup, populateSections, TEMP };
