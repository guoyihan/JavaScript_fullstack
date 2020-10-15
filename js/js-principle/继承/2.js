function Person() {}
var p1 = new Person ()

console.log(p1.constructor);  // [Function: Person]
Person.prototype = {
    name: '小花',
    constructor: Person // 3
}
Object.defineProperty(Person.prototype, 'constructor', {
    enumerable: false,
    val: Person
})
var p2 = new Person()
console.log(p2.constructor);// [Function: Object]