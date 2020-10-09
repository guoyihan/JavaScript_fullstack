const http = require('http');

http.createServer((req, res) => {
    if (req.url.includes('/api')) {
        let json = {
            code: 0
        }
        res.end(`foo(${JSON.stringify(json)})`) //end 只接受字符串,buffer的类型参数
    } else {
        res.end('')
    }
})
.listen(8088, () => {
    console.log(8088);
})
