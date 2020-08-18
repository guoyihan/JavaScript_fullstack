// 包装类
// var num = 123
// num.abc = 'aaa'    //undefined


var num = new Number(123)
num.abc = 'aaa'       //aaa


console.log(num.abc)
console.log(num*2)
// num 参与运算又变回了数字， 不参与运算它还能当作对象来使用
// 能有属性和方法， 同理字符串和布尔也一样
// 但是 null 和 undefined 不行

var str = 'abcd'
console.log(str.length)  // 4


var num = 4
num.len = 3
console.log(num.len) //undefined  为啥不报错？


//包装类
// 在原始值在调用属性的时候，隐式的进行包装
var  num = 4
num.len = 3
//隐式过程
// new  Number(4).len = 3
// delete len
// new Number(4).len



// 考点
var arr = [1, 2, 3, 4, 5]
arr.lenght = 2
console.log(arr)  // [1, 2]

var str = 'abcd'
str.lenght = 2
// new String('abcd').length = 2
// delete length
// new String('abcd').length
console.log(str) // 'abcd'  ?  原始值会执行包装类
console.log(str.length) // 4 ?  变成了字符串对象， 对象具备length


//面试题
var str = 'abc'
str += 1
var test = typeof(str)
if (test.length == 6){
    test.sign = 'typeOf的返回结果可能为String'
}
console.log(test.sign)

