const https = require('https')
const cherrio = require('cheerio')
const fs = require('fs')

//  通过https模块的get方法,请求网站链接,在回调函数中获取资源
https.get('https://movie.douban.com/top250', (res) => {
    //因为获取的资源是分段返回的,所以要自己手动拼接 (by   html)
    // console.log(res)
    let html = ''
    //res.on 类似于 addEventlistener 监听事件
    res.on('data', (chunk) => {
        html += chunk
    })

    // res数据加载完成, 我们去执行xx事件(逻辑)
    res.on('end', () => {
        // 存放爬取到的数据
        let allFilms = []
        // 操作dom
        const $ = cherrio.load(html)
        $('li .item').each(function() {
            // this 下面的.title拓扑结构
            const title = $('.title', this).text()
            const star = $('.rating_num', this).text()
            const pic = $('.pic img', this).attr('src')
            allFilms.push({title, star, pic})
        })
        // console.log(allFilms)
        fs.writeFile('./files.json',JSON.stringify( allFilms ),(err) => {
            if (err) throw err;
            console.log('文件已被保存');
          })
    })

    

})