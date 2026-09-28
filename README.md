# TOP WELL CMS (Strapi 5)

Hệ quản trị nội dung cho website TOP WELL International. Website (Next.js) nằm ở repo riêng: [topwell-web](https://github.com/devtuanphu/topwell-web).

- Strapi 5.52, Node.js 22 LTS.
- Ba ngôn ngữ: Tiếng Việt (mặc định), English, 中文.
- Admin đã Việt hóa nhãn trường và tên loại nội dung.

## Chạy trên máy

```bash
cp .env.example .env   # rồi điền các secret ngẫu nhiên
npm ci
npm run develop
```

Mở http://localhost:1337/admin và tạo tài khoản quản trị đầu tiên.

Lần đầu chạy với `SEED_DATA=true`, hệ thống nhập nội dung mẫu và upload ảnh vào Media Library. Các lần sau chỉ bổ sung bản ghi còn thiếu, không ghi đè nội dung đã chỉnh sửa.

## Biến môi trường

| Biến | Ý nghĩa |
| --- | --- |
| `HOST`, `PORT` | Địa chỉ server (mặc định `0.0.0.0:1337`). |
| `IS_PROXIED` | `true` khi chạy sau reverse proxy (nginx) để Strapi đọc đúng `X-Forwarded-Proto`. |
| `PUBLIC_URL` | Địa chỉ công khai của CMS, dùng cho link media. |
| `FRONTEND_URL` | Domain website, dùng cho CORS. Nhiều domain thì ngăn cách bằng dấu phẩy. |
| `INQUIRY_SECRET` | Chuỗi bí mật dùng chung với website để nhận dữ liệu form. Không đặt tiền tố `NEXT_PUBLIC_`. |
| `APP_KEYS`, `ADMIN_JWT_SECRET`, `API_TOKEN_SALT`, `TRANSFER_TOKEN_SALT`, `ENCRYPTION_KEY`, `JWT_SECRET` | Secret của Strapi. Tạo giá trị mạnh, riêng cho production. |
| `DATABASE_CLIENT`, `DATABASE_FILENAME` | SQLite cho máy cá nhân. Production nên dùng `postgres` với `DATABASE_URL` và `DATABASE_SSL=true`. |
| `SEED_DATA` | `true` để nhập dữ liệu mẫu khi khởi động. |
| `SEED_ASSETS_DIR` | Thư mục ảnh nguồn cho seed (mặc định `seed-assets`). |

## Cấu trúc nội dung

**Single Types**: Trang chủ, Trang Giới thiệu, Trang Dịch vụ, Trang Dự án, Trang Tin tức, Trang Liên hệ, Trang Chính sách bảo mật, Trang Tiêu chuẩn, Cấu hình chung, Đầu trang, Chân trang, Cài đặt website.

**Collection Types**: Nhóm dịch vụ (2), Dịch vụ (10), Dự án (6), Bài viết (7), Yêu cầu tư vấn (dữ liệu form khách gửi).

Mỗi trang có Dynamic Zone `sections` ghép từ các component trong `src/components/sections`. Bài viết dùng thêm component **Nội dung tự do (CKEditor)** để biên tập viên soạn thân bài tự do.

## Đa ngôn ngữ

Plugin i18n bật cho mọi content type trừ Yêu cầu tư vấn. Locale mặc định `vi`, thêm `en` và `zh`; các locale được tạo tự động khi khởi động (`src/locales.js`). Mỗi ngôn ngữ lưu và xuất bản riêng.

## API cho website

- `GET /api/site/:type?locale=vi|en|zh` – đọc nội dung đã publish, giới hạn theo danh sách cho phép. Thiếu bản dịch thì trả về `vi`, rồi `en`.
- `GET /api/site/:type/:slug?locale=…` – chi tiết dịch vụ / dự án / bài viết.
- `POST /api/site-inquiry` – chỉ chấp nhận request có header `x-inquiry-secret` khớp; tạo bản ghi Yêu cầu tư vấn, không tự gửi email.

## Dữ liệu mẫu

Nội dung gốc viết bằng tiếng Anh trong `scripts/seed.js`; bản `vi` và `zh` sinh từ `scripts/translations/*.json` (khóa là câu tiếng Anh).

```bash
npm run seed:check              # kiểm tra dữ liệu và ảnh trước khi nhập
npm run seed                    # chỉ bổ sung bản ghi còn thiếu
npm run seed -- --replace       # nạp lại nội dung thuộc bộ seed
npm run seed -- --replace --only=articles   # chỉ nạp lại một nhóm
npm run seed -- --only=serviceGroups        # nhập nhóm dịch vụ còn thiếu
```

## Cập nhật theo bản Figma V1 (3)

```bash
npm run migrate:v3
```

Sửa dữ liệu đã có cho khớp thiết kế mới: trang Dịch vụ chuyển sang thẻ nhóm dịch vụ, trang
Giới thiệu bỏ khối Ban lãnh đạo, điền hai chuỗi giao diện mới nếu còn trống. Lệnh không ghi đè
nội dung biên tập viên đã nhập. Chi tiết thay đổi: `design-reference/figma-v3/CHANGES.md` trong repo gốc.

Dừng Strapi trước khi chạy CLI seed, nhất là khi dùng SQLite. Sao lưu database trước khi dùng `--replace` trên dữ liệu đã biên tập. Lệnh không xóa tài khoản admin hay Yêu cầu tư vấn.

## Triển khai

```bash
npm run build
NODE_ENV=production npm run start
```

- Dùng PostgreSQL và cấu hình upload provider (S3, Cloudinary…) hoặc gắn volume lưu trữ lâu dài cho `public/uploads` — thư mục này không được đưa lên Git.
- Đặt `PUBLIC_URL`, `FRONTEND_URL` theo domain thật và tạo secret mới cho production.
- Giữ `INQUIRY_SECRET` giống hệt giá trị cấu hình ở website.
