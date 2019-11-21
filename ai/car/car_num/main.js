var fs = require('fs');
var AipOcrClient = require('baidu-aip-sdk').ocr;  // 图片识别? 从图片种提取文字
var image = fs.readFileSync('./li.jpg').toString('base64'); // 文件本身就是二进制文本

var APP_ID = "17799053"
var API_KEY = "3f6oYjhxKNXT1fesWTjKSior"
var SECRET_KEY = "UUGDtQC3IeWGPnhxT7UmsPXlME9QQOOX"

var client = new AipOcrClient(APP_ID, API_KEY, SECRET_KEY)
var options = {}
client.licensePlate(image, options)
    .then(function(result) {
        console.log(result)
    })
    .catch(function(err) {
        console.log(err)
    })