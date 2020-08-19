const Koa = require('Koa')

const app = new Koa() 

const main = ctx => {
    // console.log(ctx)
    // console.log(ctx.request)
    if (ctx.request.url !== '/') {
        ctx.response.type = 'html'
        ctx.response.body = '<a href="/">Index page</a>'
    } else {
        ctx.response.body = 'hello world'
    }
}
app.use(main)
app.listen(3000, () => {
    console.log('项目已经启动ing')
})