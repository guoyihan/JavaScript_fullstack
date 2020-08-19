const Koa = require('Koa')
const app =new Koa()
const router = require('koa-route')


const about = ctx => {
    ctx.response.type = 'html'
    ctx.response.body = '<a href="/">about</a>'
}
const main = ctx => {
    ctx.response.body = "hello world"
}
app.use(router.get('/about', about))
app.use(router.get('/', main))
app.listen(3000)
