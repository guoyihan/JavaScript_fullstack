const http = require('http');
const fs = require('fs');


http.createServer((req, res) =>{
    fs.createReadStream('./index.html').pipe(res)
}).listen(8888, (err) => {
    console.log(err)
    console.log('http://localhost:8888')
})