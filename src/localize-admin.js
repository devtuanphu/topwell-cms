'use strict';

const labels = require('./admin/field-labels.json');
const hints = require('./admin/field-hints.json');
const modelLabels = require('./admin/model-labels.json');

// Ô mới thêm vào schema luôn bị Strapi xếp cuối form; đưa nó lên ngay sau ô `after`, kéo theo
// các ô `follow`. Chỉ dời khi ô mới còn ở hàng cuối, nên bố cục biên tập viên tự sắp vẫn giữ nguyên.
const placements = {
  'api::article.article': { field: 'content', after: 'summary', follow: ['sections'] },
};

function place(layout, { field, after, follow = [] }) {
  const rowOf = (name) => layout.findIndex((row) => row.some((cell) => cell.name === name));
  if (rowOf(field) !== layout.length - 1 || layout[rowOf(field)].length !== 1) return;
  if (rowOf(after) === -1) return;
  let previous = after;
  for (const name of [field, ...follow]) {
    const from = rowOf(name);
    if (from === -1 || layout[from].length !== 1) continue;
    const [row] = layout.splice(from, 1);
    layout.splice(rowOf(previous) + 1, 0, row);
    previous = name;
  }
}

// Presentation metadata only: preserve API keys, data and editor layouts.
module.exports = async function localizeAdmin(strapi) {
  for (const [serviceName, models] of [
    [
      'content-types',
      Object.values(strapi.contentTypes).filter((model) => model.uid.startsWith('api::')),
    ],
    ['components', Object.values(strapi.components)],
  ]) {
    const service = strapi.plugin('content-manager').service(serviceName);
    for (const model of models) {
      const configuration = await service.findConfiguration(model);
      if (!configuration.metadatas) throw new Error(`Missing editor configuration: ${model.uid}`);
      const previous = JSON.stringify(configuration);
      for (const [key, metadata] of Object.entries(configuration.metadatas)) {
        const label = modelLabels[model.uid]?.[key] || labels[key];
        if (label)
          for (const view of ['edit', 'list']) {
            if (metadata[view]) metadata[view].label = label;
          }
        // Gợi ý ngay dưới ô nhập, ví dụ cách tạo Dịch vụ / Dự án cấp 2 và cấp 3.
        const hint = hints[model.uid]?.[key];
        if (hint && metadata.edit) metadata.edit.description = hint;
      }
      if (configuration.layouts?.edit && placements[model.uid])
        place(configuration.layouts.edit, placements[model.uid]);
      if (JSON.stringify(configuration) !== previous) {
        await service.updateConfiguration(model, configuration);
      }
    }
  }
};
