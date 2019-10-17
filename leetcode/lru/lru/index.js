// 缓存算法
// es5 首字母大写的函数就是一个类
function LRUCache(title) {
//   构造函数
//   类的属性
//   this 是指针   只有指向要生成的对象
  console.log(this);
  this.title = title
}
// 加方法
LRUCache.prototype.sayHello = function() {    //相当于给cache这个对象添加sayHello的方法
    console.log(`你好, ${this.title}`);
}
LRUCache.prototype.buyCar = function() {
    console.log('买车');
}
// 静态调用
// LRUCache.buyCar = function() {          
//     console.log('买车');
// }
// }
// LRUCache.buyCar();

//对象 实例
let cache = new LRUCache('井柏然');   //实例化
console.log(cache.title);
console.log(cache.sayHello);
console.log(cache.__proto__);
console.log(cache.__proto__ == LRUCache.prototype);
console.log(cache instanceof LRUCache);

