module.exports = {
  routes: [
    { method: 'GET', path: '/site/:type', handler: 'site.find', config: { auth: false } },
    { method: 'GET', path: '/site/:type/:slug', handler: 'site.find', config: { auth: false } },
    { method: 'POST', path: '/site-inquiry', handler: 'site.inquiry', config: { auth: false } },
  ],
};
