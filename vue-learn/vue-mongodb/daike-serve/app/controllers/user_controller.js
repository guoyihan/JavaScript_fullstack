const get = async(ctx, next) => {
    ctx.state = 200
    ctx.body = {
        msg: 'get request!',
        data: {
            data: 'hello'
        }
    }
}

module.exports = {
    get
}