'use strict';
// Site languages. Codes match the Next.js URL prefixes (/vi is served at the root).
const LOCALES = [
  { code: 'vi', name: 'Tiếng Việt (vi)' },
  { code: 'en', name: 'English (en)' },
  { code: 'zh', name: '中文 (zh)' },
];
const DEFAULT_LOCALE = 'vi';
// Seed content is authored in English; other locales are generated from translation files.
const SOURCE_LOCALE = 'en';

async function ensureLocales(strapi) {
  const locales = strapi.plugin('i18n').service('locales');
  for (const { code, name } of LOCALES)
    if (!(await locales.findByCode(code))) await locales.create({ code, name });
  if ((await locales.getDefaultLocale()) !== DEFAULT_LOCALE)
    await locales.setDefaultLocale({ code: DEFAULT_LOCALE });
}

module.exports = { LOCALES, DEFAULT_LOCALE, SOURCE_LOCALE, ensureLocales };
