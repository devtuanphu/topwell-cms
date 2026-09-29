'use strict';

const { errors } = require('@strapi/utils');

/**
 * Dịch vụ và Dự án có tối đa 3 cấp:
 *   cấp 1  trang Dịch vụ / trang Dự án (trang đơn, không nằm trong bộ sưu tập)
 *   cấp 2  mục để trống "Thuộc mục cha"
 *   cấp 3  mục chọn một mục cấp 2 làm "Thuộc mục cha"
 *
 * Chặn ngay khi lưu trong CMS: không chọn mục cấp 3 làm mục cha, không đưa một mục đang có
 * mục con xuống làm con của mục khác, không chọn chính mục đang sửa.
 */
const TREE = new Set(['api::service.service', 'api::project.project']);

/** "Thuộc mục cha" gửi lên ở nhiều dạng; trả về tham chiếu mục cha mới, null nếu bỏ trống, undefined nếu không đổi. */
function parentRef(value) {
  if (value === undefined) return undefined;
  if (value === null) return null;
  if (typeof value === 'string' || typeof value === 'number') return value;
  if (Array.isArray(value)) return value.length ? parentRef(value[0]) : null;
  if (typeof value === 'object') {
    if (value.documentId || value.id) return value.documentId || value.id;
    if (Array.isArray(value.set)) return value.set.length ? parentRef(value.set[0]) : null;
    if (Array.isArray(value.connect) && value.connect.length) return parentRef(value.connect[0]);
    if (Array.isArray(value.disconnect) && value.disconnect.length) return null;
  }
  return undefined;
}

async function findParent(strapi, uid, ref, locale) {
  if (typeof ref === 'number' || /^\d+$/.test(String(ref)))
    return strapi.db.query(uid).findOne({ where: { id: Number(ref) }, populate: { parent: true } });
  return strapi
    .documents(uid)
    .findOne({ documentId: ref, locale, status: 'draft', populate: { parent: true } });
}

module.exports = function treeGuard(strapi) {
  strapi.documents.use(async (context, next) => {
    if (!TREE.has(context.uid) || !['create', 'update'].includes(context.action)) return next();
    const data = context.params?.data || {};
    const ref = parentRef(data.parent);
    if (!ref) return next();

    const label = context.uid === 'api::service.service' ? 'Dịch vụ' : 'Dự án';
    const parent = await findParent(strapi, context.uid, ref, context.params.locale);
    if (!parent) return next();

    const documentId = context.params.documentId;
    if (documentId && parent.documentId === documentId)
      throw new errors.ValidationError('Không thể chọn chính mục này làm "Thuộc mục cha".');
    if (parent.parent)
      throw new errors.ValidationError(
        `${label} chỉ có tối đa 3 cấp. "${parent.title}" đã là mục cấp 3 nên không thể chứa mục con — hãy chọn một mục cấp 2 (mục đang để trống "Thuộc mục cha").`,
      );
    if (documentId) {
      const children = await strapi.db
        .query(context.uid)
        .count({ where: { parent: { documentId } } });
      if (children)
        throw new errors.ValidationError(
          'Mục này đang có mục con nên phải là mục cấp 2: hãy để trống "Thuộc mục cha", hoặc chuyển các mục con sang mục khác trước.',
        );
    }
    return next();
  });
};
