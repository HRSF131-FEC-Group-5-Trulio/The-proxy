const { Router } = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const {
  service1, service2, service3, service4,
} = require('../config/services.js');

const router = Router();

router.use(service1.api,(req, res, next) => {console.log('in service1 route!!: '); next();}, createProxyMiddleware({ target: service1.url, changeOrigin: true }));
router.use(service2.api,(req, res, next) => {console.log('in service2 route!!: '); next();}, createProxyMiddleware({ target: service2.url, changeOrigin: true }));
router.use(service3.api,(req, res, next) => {console.log('in service3 route!!: ', service3.api); next();},createProxyMiddleware({ target: service3.url, changeOrigin: true }));
router.use(service4.api,(req, res, next) => {console.log('in service4 route!!: '); next();}, createProxyMiddleware({ target: service4.url, changeOrigin: true }));

module.exports = router;
