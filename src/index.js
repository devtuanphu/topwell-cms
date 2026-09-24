'use strict';
const { seed } = require('../scripts/seed');
const { ensureLocales } = require('./locales');
module.exports = {
  register() {},
  async bootstrap({ strapi }) {
    await ensureLocales(strapi);
    await require('./localize-admin')(strapi);
    if (process.env.SEED_DATA === 'true' && process.env.TOPWELL_SEED_CLI !== 'true')
      await seed(strapi);
  },
};
