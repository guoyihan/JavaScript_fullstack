
// Person.prototype.name = 'wn'
// function Person () {
//     // var this = {
//     //     __proto__: Person.prototype
//     // }
// }

// var person = new Person()
// // console.log(person.name)

// var obj = {
//     name: 'woniu'
// }

// console.log(person.__proto__) // { name: 'wn' }
// person.__proto__ = obj // 一个被构造函数实例出来的隐式原型指向构造函数的显示原型 ,这个隐式原型可以被修改
// console.log(person.__proto__)







// ???
Person.prototype.name = 'wn'
function Person () {
    
}
var person = new Person ()
// 1.
// Person.prototype.name = 'pipi'  // 修改prototype的属性
// console.log(person.name)   // pipi


// 2.
// Person.prototype = {    // 把原型重新赋值   改变了内存地址 (浅拷贝) 
//     name: 'pipi'
// }
// console.log(person.name) //wn
