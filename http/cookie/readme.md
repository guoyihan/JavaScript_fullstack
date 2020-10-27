cookie(kb) 和 localStore(5mb) sessionStorage
如果 cookie 里面有内容, 自动把cookie当作请求头传输给后端

cookie
domain
path
size
expires
httpOnly 只在http环境下传输, js无法操作 (减少XSS攻击)
secure https下传输
SameSite strict/none/Lax   用来防止 CSRF 攻击和用户追踪。 http://www.ruanyifeng.com/blog/2019/09/cookie-samesite.html