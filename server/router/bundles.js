const { Router } = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const {
  service1, service2, service3, service4,
} = require('../config/services.js');

const router = Router();

// re-routing the paths from bundles/service1.js to app.js? bundling it to a file called app.js
// sets the target as localhost...it's connected..

router.use('/service1.js', createProxyMiddleware({
  target: service1.url,
  pathRewrite: {
    '^/bundles/service1.js': service1.bundle,
  },
  changeOrigin: true,
}));

router.use('/service2.js', createProxyMiddleware({
  target: service2.url,
  pathRewrite: {
    '^/bundles/service2.js': service2.bundle,
  },
  changeOrigin: true,
}));
//console.log('in bundle router')

router.use('/service3.js', createProxyMiddleware({
  target: service3.url,
  pathRewrite: {
    '^/bundles/service3.js': service3.bundle,
  },
  changeOrigin: true,
}));

router.use('/service4.js', createProxyMiddleware({
  target: service4.url,
  pathRewrite: {
    '^/bundles/service4.js': service4.bundle,
  },
  changeOrigin: true,
}));

module.exports = router;
