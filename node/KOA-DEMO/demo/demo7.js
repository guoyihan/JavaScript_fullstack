const koa = require('koa')
const app = new koa()
const route = require ('koa-route')
const main = ctx => {

    ctx.response.body = `${ctx.request.url} - ${ctx.request.method} - ${Date.now()}}`


}

app.use(route.get('/', main))

app.listen(3000)