var ApiImageClassifyClient = require
('baidu-aip-sdk').imageClassify; //图片分类

var fs = require('fs');  // node 的文件模块
var APP_ID = "17798941";
var API_SDK = "ULvG6VBdHfT5oENAykCeERqD";
var SECRET_KEY = "QkSv2hsxKfR5ANxrivE85tQYtCVhIkwn";
// 内存  ->  I/O
var image = fs.readFileSync('knsg.jpg').toString       // readFile是异步的,需要同步 读取完以后才能执行之后的操作readFileSync
("base64");

var client = new ApiImageClassifyClient(APP_ID, API_SDK, SECRET_KEY);
client.carDetect(image)
    .then(function(result) {
        console.log(result)
    })
    .catch(function(err) {
        console.log(result)
    })

// console.log(image)