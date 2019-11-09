const http = require('http')

http.createServer((req, res) => {
    console.log(req.url, req.method)
    res.writeHead(200, {
        'content-type': 'application/json',   //返回二点类容类型是  JSON
        //申明响应头,可以共享
        'Access-Control-Allow-Origin': '*',    //允许访问的源
        'Access-Control-Allow-Headers': 'x-auth, content-type',  //允许访问的头
        'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',//允许访问的传输方式
        'Access-Control-Allow-Credentials': true   //  *****   允许cookie 传输

    })
    // res.end(JSON.stringify({
    //     bookName: 'php'
    // }))   //转为字符串
    res.end(`
    getBook(${JSON.stringify({bookName: 'php'})})
    `)
})
.listen(3000, () => {    //监听3000这个端口
    console.log('server is running')
})