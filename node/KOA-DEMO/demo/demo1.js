// 引入依赖 common.js
const Koa = require('Koa')

const app = new Koa() //定义一个新的koa实例


app.listen(3000, () => {
    console.log('项目已经启动ing')
})