import Koa = require('koa')
import {createServer} from 'http'
import {promisify} from 'util'

const app = new Koa()
const server = createServer(app.callback())


require('./modules')(app)

!(async () => {
    const port = 8085;
    await promisify(server.listen).call(server, port, undefined)
    console.log(`Server open on Port : ${port}`)
})()