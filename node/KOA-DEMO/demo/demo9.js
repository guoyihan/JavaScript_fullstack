const koa = require('koa')
const app = new koa()
const route = require ('koa-route')
const one = (ctx, next) => {
    console.log('<<one')
    next()
    console.log('one>>')
}
const two = (ctx, next) => {
    console.log('<<two')
    next()
    console.log('two>>')
}
const three = (ctx, next) => {
    console.log('three')
    next()
}


app.use(one)
app.use(two)
// app.use(three)

app.listen(3000)