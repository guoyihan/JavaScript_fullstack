const http = require('http');
const qs = require('querystring')
http.createServer((req, res) => {
    if (req.url.includes('/api')) {
        let json = {
            code: 0
        }
        console.log(req.url)
        let fn = qs.parse(req.url.split('?')[1]).callback
        res.end(`${fn}(${JSON.stringify(json)})`) //end 只接受字符串,buffer的类型参数
    } else {
        res.end('')
    }
})
.listen(8088, () => {
    console.log(8088);
})
