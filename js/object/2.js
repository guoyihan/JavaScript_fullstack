// 构造函数
function Student(name, age, sex) {
    // var this = {
            // name: '',
            // age: ''
    // }
    this.sex = sex
    this.name = name
    this.age = age
    this.grade = 2017
    // return this
    return 123
}
function Test() {
    
}

var student = new Student('jiahao', 22, 'boy')
console.log(student)

// function Person(name, age) {
//     var that = {}
//     that.name = name,
//     that.age = age
//     return that
// }

// var person = new Person('wn', 18)