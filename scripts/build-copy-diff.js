'use strict';
/**
 * So nội dung seed ở một commit trước (thư mục .old-seed) với seed hiện tại, ghi ra danh sách
 * ô chữ đổi theo từng ngôn ngữ để migration cập nhật dữ liệu đang chạy.
 * Chạy: node scripts/build-copy-diff.js <tên-file-json>
 */
const fs = require('node:fs');
const path = require('node:path');
const { LOCALES } = require('../src/locales');
const NEW = require('./seed');
const OLD = require('../.old-seed/scripts/seed');

const SINGLE = ['global', 'header', 'footer', 'site-settings'];
const docs = (content) => {
  const out = {};
  for (const name of SINGLE) out[name] = content[name];
  for (const [name, page] of Object.entries(content.pages)) out[name] = page;
  for (const group of ['services', 'projects', 'articles'])
    for (const item of content[group]) out[`${group}:${item.slug}`] = item;
  return out;
};
const leaves = (value, prefix = [], out = []) => {
  if (typeof value === 'string') out.push([prefix, value]);
  else if (Array.isArray(value)) value.forEach((v, i) => leaves(v, [...prefix, i], out));
  else if (value && typeof value === 'object') {
    if (value.$file) return out;
    for (const [k, v] of Object.entries(value)) leaves(v, [...prefix, k], out);
  }
  return out;
};
const at = (value, p) => p.reduce((v, k) => (v == null ? undefined : v[k]), value);

const result = {};
for (const { code } of LOCALES) {
  const localize = (mod) => {
    const r = mod.localizeContent(mod.CONTENT, code);
    // Thân bài viết lưu trong CMS ở dạng khối rich text, so theo đúng dạng đó.
    return NEW.articleRichText(structuredClone(r.content || r));
  };
  const before = docs(localize(OLD));
  const after = docs(localize(NEW));
  for (const [key, oldDoc] of Object.entries(before)) {
    const newDoc = after[key];
    if (!newDoc) continue;
    const changes = [];
    const seen = new Set();
    for (const [p, from] of leaves(oldDoc)) {
      seen.add(p.join('.'));
      const to = at(newDoc, p);
      if (to !== from) changes.push({ path: p, from, to: typeof to === 'string' ? to : null });
    }
    for (const [p, to] of leaves(newDoc))
      if (!seen.has(p.join('.'))) changes.push({ path: p, from: null, to });
    if (changes.length) (result[code] ||= {})[key] = changes;
  }
}
const file = path.join(__dirname, 'data', process.argv[2] || 'copy-diff.json');
fs.writeFileSync(file, JSON.stringify(result, null, 1) + '\n');
for (const [code, byDoc] of Object.entries(result))
  console.log(code, Object.entries(byDoc).map(([k, c]) => `${k}:${c.length}`).join('  '));
