const fs = require('fs')
// fs 是一个文件系统，负责读写文件
const Koa = require('Koa')
const app = new Koa()


const main = ctx => {
    ctx.response.type = 'html'
    ctx.response.body = fs.createReadStream('./template.html')
}
app.use(main)
app.listen(3000)