'use strict';

const labels = require('./admin/field-labels.json');

// Presentation metadata only: preserve API keys, data and editor layouts.
module.exports = async function localizeAdmin(strapi) {
  for (const [serviceName, models] of [
    ['content-types', Object.values(strapi.contentTypes).filter((model) => model.uid.startsWith('api::'))],
    ['components', Object.values(strapi.components)],
  ]) {
    const service = strapi.plugin('content-manager').service(serviceName);
    for (const model of models) {
      const configuration = await service.findConfiguration(model);
      if (!configuration.metadatas) throw new Error(`Missing editor configuration: ${model.uid}`);
      const previous = JSON.stringify(configuration);
      for (const [key, metadata] of Object.entries(configuration.metadatas)) {
        if (!labels[key]) continue;
        for (const view of ['edit', 'list']) {
          if (metadata[view]) metadata[view].label = labels[key];
        }
      }
      if (JSON.stringify(configuration) !== previous) {
        await service.updateConfiguration(model, configuration);
      }
    }
  }
};
