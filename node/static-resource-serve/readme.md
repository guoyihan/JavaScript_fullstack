##  静态资源
不会随着服务运行而改变的东西
html css js jpg png 


请求的url 和 文件在磁盘上的路径 一一对应起来
:8888/logo.js/png  ->  404
:8888/js/home.png  ->  read   ->  res


file:///G:/JavaScript_fullstack/node/static-resource-serve/index.html

浏览器双击打开  
以file 协议 ./../..
放到服务器上面  变成http 协议