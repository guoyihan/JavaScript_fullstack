

Person.prototype.lastname = 'fu'
function Person (name) {
    this.name = name
}


var person = new Person ('jinlong')

// console.log(person.lastname)    // fu

// person.lastname = 'yu'
// console.log(person.lastname)       // yu
// Person.prototype.lastname = 'yu'
// console.log(person.lastname)


// 删除
// delete person.lastname
// console.log(person.lastname)





function Car () {
    
}
var car = new Car()
console.log(car.prototype)  // undefined  prototype只有函数对象Car有,即使被car实例化了 ,也只是继承prototype里的属性

// Car.prototype.name = 'BMW'
// console.log(car.prototype)  //undefined

// console.log(car.constructor)  //function Car() {}
// constructor 为了让Car()构造出的所有的对象都能找到它自己的构造器
function Bus() {

}
Car.prototype = {
    constructor: Bus
}
console.log(car.constructor) // function Bus() {}
