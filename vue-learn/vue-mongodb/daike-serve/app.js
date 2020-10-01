const Koa = require('koa')
const cors = require('koa2-cors') //跨域处理
const bodyParser = require('koa-bodyparser') // 解析参数
const mongoose = require('mongoose')// 做mongodb连接
const config = require('./config')


const app = new Koa()


// 建立mongodb
mongoose.connect(config.db, {useNewUrlParser: true}, (err) => {
    if (err) {
        console.error('Failed to connect to datebase')
    } else {
        console.log('connecting database successfullys');
    }
})

app.use(bodyParser());
app.use(cors())



const user_router = require('./routes/api/user_router')
app.use(user_router.routes()).use(user_router.allowedMethods())



app.listen(config.port)

