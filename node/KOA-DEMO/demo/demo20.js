const Koa = require('koa')
const app = new Koa()
const KoaBody = require('koa-body')

const main = ctx => {
    const body = ctx.request.body
    if(!body.name) {
        ctx.html(400, '.request.name')
    }
    ctx.response.body = { name: body.name }
}
app.use(KoaBody())
app.use(main)
app.listen(3000)
