const koa = require('koa')
const KoaRouter = require('koa-router')
const fs = require('fs') //异步读取文件
const app = new koa()
const router = new KoaRouter({prefix: '/api'})  //前缀


//请求方式
// router.get('/user', async (ctx) => {
//     let userInfo = fs
//     .readFileSync('./api/user.json')
//     .toString()
//     ctx.body = {
//         data: JSON.parse(userInfo),
//         code: 200
//     }
// })

const glob = require('glob')
const path = require('path')
glob.sync(path.resolve('./api/','*.json')) // 路径的拼接  获取api文件下的json文件
.forEach((item, i) => {
    console.log('item', item)
    let apiJsonPath = item && item.split('/api')[1]   // 获取所有json文件的名字
    let apiPath = apiJsonPath.replace('.json', '')
    router.get(apiPath, async (ctx) => {
        let fileData = fs.readFileSync(item)
        .toString()

        ctx.body = {
            data: JSON.parse(fileData),
            code: 200
        }
    })
})
// 对于任何请求，app将调用该异步函数处理请求
// app.use 加载一个 中间件s
// request -> response
// request -> middleWare1-> middleWare2 -> response


// ctx: { request, response }
// app.use(async (ctx) => {
//     ctx.body = {
//         code: 200,
//         msg: 'ok'
//     }
// })
// http://localhost:3000/api/user
app.use(router.routes())
.use(router.allowedMethods())
app.listen(3000, () => {
    console.log('server is runing http://localhost:3000')
})