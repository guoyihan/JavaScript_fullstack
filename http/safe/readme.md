# 什么是XSS攻击?如何防范XSS?什么是CSP
XSS就是攻击者想尽一切办法讲可以执行的代码注入网页中
分为:
- 持久型: 攻击者的代码被服务端写进了数据库
- 非持久型: 如,修改url的参数 

## 防范:

1. 转义字符
function escape(str) {
    str = str.replace(/&/g, '&amp;')
    str = str.replace(/</g, '&lt;')
    str = str.replace(/>/g, '&gt;')
    str = str.replace(/"/g, '&quto;')
    str = str.replace(/'/g, '&#39;')
    str = str.replace(/`/g, '&#96;')
    str = str.replace(/\//g, '&#x2F;')
    return str
  }
  <!-- <script>alert(1)</script> -->
  <!-- &lt;script&gt;alert(1)&lt;&#x2F;script&gt; -->
2. 白名单
```
const xss = require('xss')
let html = xss('<h1>XSS DEMO</h1>')
```

## CSP
开发者告诉浏览器哪些外部资源是可以加载和执行的,如果拦截是由浏览器自己实现的.
通常有两种方式开启
1. 设置Http Header 中的Content-Security-Policy
2. 设置meta标签  <metahttp-equiv="Content-Security-Policy">

<!-- Content-Security-Policy: default-src 'self' (只允许加载本地资源)
Content-Security-Policy: img-src https://* (只允许加载https的图片) -->



# 什么是CSRF攻击?如何防范CSRf?
跨站请求伪造


防范:
1. GET请求不对数据进行修改
2. 不让第三方网站访问Cookie
3. 阻止第三方网站的请求
4. 请求时必须携带验证码或者Token