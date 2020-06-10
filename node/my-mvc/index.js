// const Koa = require('koa')
// const app = new Koa


// const app = new(require ('koa'))()
// const { initRouter } = require('./lm-loader')
// app.use(initRouter().routes())
// app.listen(3000)


const lm = require('./lm')
const app = new lm()
app.start(3000)