// 仅仅开发环境中 启动此服务
const app = require('koa')()
const config = require('../config')
const debug = require('debug')('app:bin:server')
const server = require('../server/koa')(app)
const port = config.sevices_port


server.listen(port)
debug(`Services is now running at http://localhost:${port}.`)
