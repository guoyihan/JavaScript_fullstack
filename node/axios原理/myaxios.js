// Axios 是一个基于 promise 的 HTTP 库，可以用在浏览器和 node.js 中。
// 因为axios请求的写法有很多,比如axios括号直接放个对象,也可以直接取他
// 里面的get,post等方法,所以创建一个类,在外面在定义一个函数,用来实例化axios
// 这个类,并用新的变量来保存里面的方法,在axios这个类的原型上添加各种请求方式的函数
// 比如post,get之类的,值得注意的一点就是'get', 'delete', 'head', 'options'是只接受2个参数的.
// 把原型上的那些请求方式搬运到axios类里的方法比如request.
// 从浏览器中创建 XMLHttpRequests
// 从 node.js 创建 http 请求
// 支持 Promise API
// 拦截请求和响应
// 转换请求数据和响应数据
// 取消请求
// 自动转换 JSON 数据
// 客户端支持防御 XSRF


class Axios {
    constructor() {
      this.interceptors = {
        request: new InterceptorsManage(),
        response: new InterceptorsManage()
      }
    }
  
    request(config) {
      // 把拦截器和ajax请求组装成一个队列
      let chain = [this.sendAjax.bind(this), undefined]
  
      // 请求拦截
      this.interceptors.request.handlers.forEach(interceptor => {
        chain.unshift(interceptor.fullfield, interceptor.rejected)
      })
  
      // 响应拦截
      this.interceptors.response.handlers.forEach(interceptor => {
        chain.unshift(interceptor.fullfield, interceptor.rejected)
      })
  
      // 执行队列，每次执行一对，并给Promise赋最新的值
      let promise = Promise.resolve(config);
      while (chain.length > 0) {
        promise = promise.then(chain.shift(), chain.shift())
      }
      return promise
      // this.sendAjax(config)
    }
    sendAjax(config) {
      return new Promise(resolve => {
        const { url = '', method = 'get', data = {} } = config
        // 发ajax请求
        const xhr = new XMLHttpRequest()
        xhr.open(method, url, true)
        xhr.onload = function() {
          // console.log(xhr.responseText);
          resolve(xhr.responseText)
        }
        xhr.send(data)
      })
    }
  }
  const methodsArr = ['get', 'delete', 'head', 'options', 'put', 'patch', 'post']
  methodsArr.forEach(met => {
    Axios.prototype[met] = function() {
      // 处理单个的方法
      if (['get', 'delete', 'head', 'options'].includes(met)) { // 只接受两个参数(url, [config])
        // console.log(this);
        return this({
          method: met,
          url: arguments[0],
          ...arguments[1] || {}
        })
      } else { // 接受3个参数(url, data, [config])
        return this({
          method: met,
          url: arguments[0],
          data: arguments[1] || {},
          ...arguments[2] || {}
        })
      }
    }
  })
  
  
  const utils = {
    extend (a, b, context) {
      for (let key in b) {
        if (a.hasOwnProperty(key)) {
          if (typeof b[key] === 'function') {
            a[key] = b[key].bind(context)
          }
        } else {
          a[key] = b[key]
        }
      }
    }
  }
  
  
  function CreateAxiosFn() {
    let axios = new Axios()
    let req = axios.request.bind(axios)
    utils.extend(req, Axios.prototype, axios)
    utils.extend(req, axios)
    return req
  }
  
  let axios = CreateAxiosFn()
  
  
  
  
  // 拦截器
  class InterceptorsManage {
    constructor() {
      this.handlers = []
    }
  
    use(fullfield, rejected) {
      this.handlers.push({
        fullfield,
        rejected
      })
    }
  }
  
  