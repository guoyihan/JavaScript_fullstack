const Koa = require('koa')
const compose = require('koa-compose') // 更好的调用中间件
const app = new Koa()

const logger = (ctx, next) => {
    ctx.response.body = `${ctx.request.url} - ${ctx.request.method} - ${Date.now()}}`
    next()
}
const main = ctx => {
    ctx.response.body = "hello world"
}

const middlewares = compose([logger, main])
app.use(middlewares)
// app.use(logger)
// app.use(main)

app.listen(3000)