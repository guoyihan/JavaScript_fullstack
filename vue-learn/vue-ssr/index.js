const Vue = require('vue')
const renderer = require('vue-server-renderer').createRenderer()
const server = require('express')()

const app = new Vue({
    template: '<div>hello world</div>'
})

//服务端渲染
server.get('/', (req, res) => {
    renderer.renderToString(app,(err, html) => {
        if (err) {
            res.status(500).end('Status Error')
            return
        }
        res.send(`<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>hello</title>
        </head>
        <body>
            ${html}
            scrpt
        </body>
        </html>
        `)
    })
})
server.listen(8080)