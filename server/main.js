const app = require('koa')()
const router = require('koa-router')()
const views = require('koa-views')
const logger = require('koa-logger')
const json = require('koa-json')
const onerror = require('koa-onerror');
const api = require('./api')
const debug = require('debug')('app:server')
const webpack = require('webpack')
const webpackConfig = require('../build/webpack.config')
const config = require('../config')
const paths = config.utils_paths

// require middleware.
app.use(views(__dirname));
app.use(require('koa-bodyparser')());
app.use(json());
app.use(logger());

//history路由地址刷新 访问 避免 404
app.use(function *(next) {
  if (this.method == 'GET' && this.accepts().indexOf('text/html') > -1) {
    this.url = '/index.html'
  }
  yield next
})
// ------------------------------------
// Apply Webpack HMR Middleware
// ------------------------------------
if (config.env === 'development') {
  var webpackDevMiddleware = require('koa-webpack-dev-middleware');
  var webpackHotMiddleware = require('koa-webpack-hot-middleware');
  const compiler = webpack(webpackConfig)
  debug('Enable webpack dev and HMR middleware')
  app.use(webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    contentBase: paths.client(),
    hot: true,
    quiet: config.compiler_quiet,
    noInfo: config.compiler_quiet,
    lazy: false,
    stats: config.compiler_stats
  }))
  app.use(webpackHotMiddleware(compiler))
  app.use(require('koa-static')(paths.client('static')));
} else {
  app.use(require('koa-static')(_paths.dist()));
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

module.exports = app
