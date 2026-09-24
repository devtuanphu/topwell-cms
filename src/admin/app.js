/**
 * Vietnamese admin experience for the TOP WELL editorial team.
 * Model and field keys remain English; only the Strapi UI is localized.
 */
export default {
  config: {
    locales: ['vi', 'en'],
    defaultLocale: 'vi',
    translations: {
      vi: {
        'app.components.LeftMenu.navbrand.title': 'TOP WELL CMS',
        'app.components.LeftMenu.navbrand.workplace': 'Quản trị nội dung',
        'app.components.LeftMenu.logout': 'Đăng xuất',
        'app.components.Button.cancel': 'Hủy',
        'app.components.Button.save': 'Lưu',
        'app.components.Button.confirm': 'Xác nhận',
        'app.components.Button.delete': 'Xóa',
        'app.components.Notifications.success': 'Thành công',
        'app.components.Notifications.error': 'Đã xảy ra lỗi',
        'global.content-manager': 'Quản lý nội dung',
        'global.content-type-builder': 'Trình tạo loại nội dung',
        'global.settings': 'Cài đặt',
        'global.save': 'Lưu',
        'global.cancel': 'Hủy',
        'global.delete': 'Xóa',
        'global.edit': 'Chỉnh sửa',
        'global.create': 'Tạo mới',
        'global.publish': 'Xuất bản',
        'global.unpublish': 'Gỡ xuất bản',
        'global.search': 'Tìm kiếm',
        'global.filters': 'Bộ lọc',
        'global.reset': 'Đặt lại',
        'content-manager.containers.ListPage.header.addNew': 'Tạo nội dung mới',
        'content-manager.containers.EditView.header.editing': 'Đang chỉnh sửa',
        'content-manager.containers.EditView.header.published': 'Đã xuất bản',
        'content-manager.containers.EditView.header.unpublished': 'Chưa xuất bản',
      },
    },
  },
};
