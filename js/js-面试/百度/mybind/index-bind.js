// 实现ES5中Function原型的bind方法， 使得以下程序最后能输出'success'
Function.prototype.mybind = function(THIS, ...arg1) {
    let fn = this //谁调用这个 bind    1.
    function T(...arg2) {
        // ...
        // this instanceof T 判断是否被new 第二次改变了作用域   3.
        return fn.call(this instanceof T ? this : THIS, ...arg1, ...arg2)    
    }
    T.prototype = Object.create(fn.prototype)  // 保存原型 2.
    return T
}
 function Animal(name, color) {
  this.name = name;
  this.color = color;
 }
 Animal.prototype.say = function () { 
  return `I'm a ${this.color} ${this.name}`;
 };
 const Cat = Animal.mybind(null, 'cat');
 const cat = new Cat('white');
 if (cat.say() === 'I\'m a white cat' && cat instanceof Cat && cat instanceof Animal) {
  console.log('success');
 }
