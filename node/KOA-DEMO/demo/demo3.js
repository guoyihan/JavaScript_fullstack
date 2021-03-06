// 引入依赖 common.js
const Koa = require('Koa')

const app = new Koa() //定义一个新的koa实例


// ctx.request.accepts检查http请求的accept的内容的
// Accept属于请求头， 代表客户端希望接受的数据类型， 跟Content-type有关
const main = ctx => {
    if(ctx.request.accepts('xml')){
        ctx.response.type = 'xml'
        ctx.response.body = '<data> Hello World</data>'
    } else if (ctx.request.accepts('html')) {
        ctx.response.type = 'html'
        ctx.response.body = '<p> Hello World</p>'
    } else if (ctx.request.accepts('json')) {
        ctx.response.type = 'json'
        ctx.response.body = '{data: Hello World}'
    } else{
        ctx.response.type = 'text'
        ctx.response.body = 'Hello World'
    }
}
app.use(main)

app.listen(3000, () => {
    console.log('项目已经启动ing')
})