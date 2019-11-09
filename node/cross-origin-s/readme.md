## 跨域
浏览器的 安全策略:
两个服务通信需要尊师同源(同协议, 同域名, 同端口号)策略: 
同源才会让你发出请求
不同源 就产生跨域
http://localhost:8080/index.html
http://localhost.com/api/v1

baidu.com    api.baidu.com      这两个不同源


## 解决方式
  ## cors
  cross-origin-resource-share  跨域资源共享
  一个规范,允许服务器申明哪些源可以访问

## 请求的步骤
1. 简单请求:直接发起跨域请求   比如:表单请求
2. 复杂请求:先发起预检(preFlight)请求, 预先试探一下服务端支不支持跨域, 之后才会发起正式的跨域请求   比如:json



## jsonP
link script img : 不受同源策略的影响