cookie(4kb)   localStore(5mb)   sessionStorage(5mb)    indexedDB(无限)
可设置
过期时间        需手动清除         关闭页面消失              需手动清除     

每次携带在      
Header中,         不参与             不参与                  不参与
影响请求性能



如果 cookie 里面有内容, 自动把cookie当作请求头传输给后端

cookie
value: 保存用户登陆状态,值应该加密
domain
path
size
expires
httpOnly 只在http环境下传输, js无法操作访问 (减少XSS攻击)
secure https下传输
SameSite strict/none/Lax  规定浏览器不能再跨域请求中携带cookie  用来防止 CSRF 攻击和用户追踪。 http://www.ruanyifeng.com/blog/2019/09/cookie-samesite.html



# 什么是ServiceWorker
运行在浏览器背后的独立线程, 一般用来实现缓存的功能, 传输协议必须是https

