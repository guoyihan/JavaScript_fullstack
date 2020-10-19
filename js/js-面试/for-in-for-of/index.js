// for .. in .. 取key值 (数组也有,只不过隐藏了)   19-23

// const obj = {
//     a: 1,
//     b: 2,
//     c: 3
// }

// for (let i of obj) {
//     console.log(i)
// }


// const arr = ['a', 'b', 'c']
// for (let i in arr) {
//     console.log(i)
// }

// const arr = ['a', 'b']
// arr.name = 'wn'
// for (let i in arr) {
//     console.log(i)
// }



// const obj = {
//     a: 1,
//     b: 2
// }
// Object.prototype.c = 3
// for (let i in obj) {
//     console.log(i)
// }




// 对象中的常规属性和排序属性
function Foo() {
    this[100] = 'test-100'
    this[1] = 'test-1'
    this['b'] = 'bar-B'
    this[50] = 'test-50'
    this[9] = 'test-9'
    this[8] = 'test-8'
    this[3] = 'test-3'
    this[5] = 'test-5'
    this['A'] = 'bar-A'
    this['C'] = 'bar-C'
    this['c'] = 'bar-c'
}

let bar = new Foo()
for (let key in bar) {
    console.log(`index:${key} value:${bar[key]}`)
}




// 用for of  实现遍历对象
let obj = {
    a: 1, 
    b: 2,
    [Symbol.iterator]: () => {  //无参数的函数, 返回值必须是一个符合迭代器协议的对象, 迭代器协议里面必须有一个next属性
        // 详情见:  https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols
        // es6 generate
        let keys = Object.keys(obj)
        return {
            next() {
                for (let i = 0; i <keys.length; i++) {
                    if (i === keys.length - 1) {
                        return {
                            done: true,
                            value: obj[key[i]]
                        }
                    }
                    return {
                        done: false,
                        value: obj[key[i]]
                    }
                }
                
            }
        }
    }
}

for (item of obj) {
    
}
