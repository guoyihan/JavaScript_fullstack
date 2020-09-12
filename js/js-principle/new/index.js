// function Person(name){
//     this.name = name
// }
// let p = new Person('Tom')

// // 1. p.__proto__ = ?    Person.prototype

// // 2. Person.__proto__ ?   Function.prototype


// var foo = {}
// var F = function() {}

// Object.prototype.a = 'value a'
// Funciton.prototype.b = 'value b'


// //3.
// console.log(foo.a);    // value a
// console.log(foo.b);    // undefined
// console.log(foo.b);    // value a
// console.log(foo.b);    // value b


function Person(name) {
    this.name = name
}
let p = new Person('Tom')

// p = { name : 'Tom' }

// new 的实现原理
function myNew(fun) {
    return function () {
        let obj = {
            __proto__: fun.prototype
        }
        fun.call(obj, ...arguments)
        return obj
    }
}



// new是个函数, 里面一定有一个对象参数,最后抛出也是一个对象



function myNew() {
    // 创建一个实例对象
    let obj = {}
    // 取到外部 传进来的构造器
    let Constructor = Array.prototype.shift.call(arguments)
    // 实现继承，要实例可以访问构造器的属性,相当于实例化的隐式原型指向构造函数的显示原型
    obj.__proto__ = Constructor.prototype
    // 调用构造器，改变其this指向到实例
    let ret = Constructor.apply(obj, arguments)
    return typeof ret === 'object' && ret !== null ? ret : obj
  }
  
  
  const Test = function(name) {
    this.name = name
  }
  let newObj = myNew(Test, 'yuanlong')
  
  console.log(newObj);