const app = require('koa')()
const debug = require('debug')('web:server')
const webpack = require('webpack')
const webpackConfig = require('../build/webpack.config')
const config = require('../config')
const paths = config.utils_paths

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
  // 生产环境中 后端服务与前端 共用用一个服务器
  require('./koa')(app)
}
module.exports = app
