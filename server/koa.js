/**
 * Created by lilei on 2017/1/10.
 */
module.exports = function (app) {
  const router = require('koa-router')()
  const views = require('koa-views')
  const logger = require('koa-logger')
  const json = require('koa-json')
  const onerror = require('koa-onerror');
  const api = require('./api')
  const debug = require('debug')('app:server')
  const webpack = require('webpack')
  const config = require('../config')
  const paths = config.utils_paths
// ------------------------------------
// Apply  Middleware
// ------------------------------------
  app.use(views(__dirname));
  app.use(require('koa-bodyparser')());
  app.use(json());
  app.use(logger());
  app.use(require('koa-static')(paths.dist()));
  if (config.env === 'development') {
    app.use(require('kcors')());
  }
// ------------------------------------
// router
// ------------------------------------
  router.get('/getProduction', function *(next) {
    this.body = {text: 'OK'}
  });
// router.use('/', router.routes(), router.allowedMethods());
  router.use('/api', router.routes(), router.allowedMethods());
  app
    .use(router.routes())
    .use(router.allowedMethods());

  app.on('error', function (err, ctx) {
    logger.error('server error', err, ctx);
  });
  return app
}
