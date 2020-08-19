const koa = require('koa')
const app = new koa()
const route = require ('koa-route')
const logger = (ctx, next) => {
    ctx.response.body = `${ctx.request.url} - ${ctx.request.method} - ${Date.now()}}`
    next()
}
const main = ctx => {
    ctx.response.body = "hello world"
}


app.use(logger)
app.use(main)

app.listen(3000)