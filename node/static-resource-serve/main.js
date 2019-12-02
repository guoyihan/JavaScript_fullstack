const fs = require('fs');
const http = require('http');
const path = require('path');

console.log(12344444)
http.createServer((req, res) => {
  const filePath = path.join(__dirname, req.url);
  console.log(filePath);
  fs.stat(filePath, (err, stats) => {
    if (err) {
      res.statusCode = 404;
      res.end(`${filePath}: 404`);
      return ;
    }
    if (stats.isFile()) {
      res.statusCode = 200;
      fs.createReadStream(filePath).pipe(res);
    } else if (stats.isDirectory()) {
      fs.readdir(filePath, (err, files) => {
        let filesLink = files.map(file => {
          // /static  css js
          // /static/css
          // // 
          // /static
          return `
          <a href="${
            req.url === '/' 
            ? '' : 
            req.url + '/'}${file}">${file}</a>
          <br/>`
        }).join('')
        res.end(filesLink)
      })
    }
  })
})
.listen(8888, () => {
  console.log('http://localhost:8888')
})
