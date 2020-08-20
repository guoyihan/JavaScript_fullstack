const Koa = require('koa')
const app = new Koa()


const handle = async (ctx, next) => {
    // 捕捉错误,如果出错 我们直接输出一个错误页面
    // 用p 标签装内容 something error, you should concat adminster
    try {
        await next()
    } catch (error) {
        ctx.response.status = error.statusCode | error.status
        ctx.response.type = 'html'
        ctx.response.body = '<p> something error, you should concat adminster </p>'
        ctx.app.emit('error', error, ctx)
    }
}

const main = ctx => {
  ctx.throw(500)
}

// 监听错误, 可以在控制台看见server error
app.on('err', function(err)  {
    console.log(err)
    console.log('logger error', err.message)
})
app.use(handle)
app.use(main)

app.listen(3000)

