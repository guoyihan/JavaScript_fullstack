var num = 123
num.toString() //   ----> new Number(num).toString() 因为包装类


console.log(num.toString())   // '123'


// Number.prototype.__proto__ = Object.prototype

// 方法重写
Object.prototype.toString = function() {
    return 'hhhh'
}

function Person() {

}
var person = new Person()
console.log(person.toString())  // 'hhhh'