const mod = require('./a')
console.log(mod.c)  // 3
mod.inc()
// 导入的值就是 把导出的值 复制一份过来 引用类型可以改变
// 如果一个模块被require了两次,他会把上一次的结果缓存起来
console.log(mod.c)  // 3
