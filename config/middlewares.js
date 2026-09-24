module.exports = [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          // CKEditor previews: media library images and embedded YouTube/Vimeo videos.
          'img-src': ["'self'", 'data:', 'blob:'],
          'media-src': ["'self'", 'data:', 'blob:'],
          'frame-src': ["'self'", 'https://www.youtube.com', 'https://www.youtube-nocookie.com', 'https://player.vimeo.com'],
        },
      },
    },
  },
  {
    name: 'strapi::cors',
    config: {
      // FRONTEND_URL có thể liệt kê nhiều domain, ngăn cách bằng dấu phẩy.
      origin: (process.env.FRONTEND_URL || 'http://localhost:3100')
        .split(',')
        .map((o) => o.trim())
        .filter(Boolean),
    },
  },
  'strapi::poweredBy',
  'strapi::query',
  { name: 'strapi::body', config: { jsonLimit: '1mb' } },
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
