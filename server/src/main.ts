import Koa = require('koa')
import http = require('http')
import {connect} from 'mongoose'
const Logger = require('koa-logger')
const Body = require('koa-body')
const Cors = require('koa2-cors')
const {promisify} = require('util')
const bindRoutes = require('./modules')
import {ServerPort, DBUrl} from './const'

const app = new Koa()
const server = http.createServer(app.callback())

app.use(Logger())
app.use(Body())
app.use(Cors())

// 绑定路由
bindRoutes(app)

!(async () => {
    await connect(DBUrl)
    await promisify(server.listen).call(server, ServerPort, undefined)
    console.log(`Server open on Port : ${ServerPort}`)
})()