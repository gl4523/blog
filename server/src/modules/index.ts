import KoaRouter from 'koa-router'
import Koa from 'koa'
import fs from 'fs'
import {resolve} from 'path'

module.exports = function(app: Koa) {
    const routes = getRoutes()
    routes.forEach(route => {
      app.use(route.routes())
         .use(route.allowedMethods())
    })
}

function getRoutes(): KoaRouter[] {
  const routes: KoaRouter[] = []
  const dirs = getDirs()
  dirs.forEach(dirPath => {
    try {
      const route = require(resolve(__dirname, dirPath))
      if (route instanceof KoaRouter) {
        routes.push(route)
      } else {
        throw 'The module must export the router instance'
      }
    } catch (e) {
      throw new String(e)
    }
  })
  return routes
}

function getDirs(): string[] {
  const allPaths = fs.readdirSync(resolve(__dirname))
  const dirs = (allPaths || []).filter(path => fs.statSync(resolve(__dirname, path)).isDirectory())
  return dirs
}