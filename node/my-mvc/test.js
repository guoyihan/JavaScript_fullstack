//原生node.js启动一个web服务
// const http = require('http')

// const server = http.createServer((req, res) => {
//     res.end('helloworld')
// })

// server.listen(3000, () => {
//     console.log('ok')
// })


//利用koa启动一个web服务
const Koa = require('koa')
const app = new Koa()

const main = ctx => {
    ctx.response.body = 'hello world'
}

app.use(main)

app.listen(3000)