module.exports = app => ({
    index: async ctx => {
        // ctx.body = 'Ctrl Index'
        
        ctx.body = await app.$model.user.findAll()
    }, 
    detail: ctx => {
        ctx.body = 'Ctrl detail'
    }
})

// module.exports = app => ({
//     'get /': app.$ctrl.home.index,
//     'get /detail': app.$ctrl.home.index,
// })