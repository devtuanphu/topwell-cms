'use strict';
const { seed } = require('../scripts/seed');
const { ensureLocales } = require('./locales');
module.exports = {
  register({ strapi }) {
    // Dịch vụ và Dự án tối đa 3 cấp (xem tree-guard.js).
    require('./tree-guard')(strapi);
  },
  async bootstrap({ strapi }) {
    await ensureLocales(strapi);
    await require('./localize-admin')(strapi);
    if (process.env.SEED_DATA === 'true' && process.env.TOPWELL_SEED_CLI !== 'true')
      await seed(strapi);
  },
};
