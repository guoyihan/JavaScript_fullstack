// // 栈,线性结构, 特点:再某一端添加或者删除数据,遵循先进后出的原则

// class stack {
//     constructor() {
//         this.stack = []
//     }
//     push(item) {
//         this.stack.push(item)
//     }
//     pop() {
//         this.stack.pop {}
//     }
//     peek() {
//         return this.stack[this.getCount() - 1]
//     }
//     getCount() {
//         return this.stack.length
//     }
//     isEmpty() {
//         return this.getCount === 0
//     }
// }


// let stack = new Stack() // {stack: []}



var isValid = function(s) {
    let map = {
        '(': -1,
        ')': 1,
        '[': -2,
        ']': 2,
        '{': -3,
        '}': 3
    }
    let stack = []
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]] < 0) {
            stack.push(s[i])    // 先把所有左半边的括号存入到数组中
        } else {  // 当循环中出现了右半边括号时，我们将数组中的元素取出与之进行相加
            let last = stack.pop()
            if (map[last] + map[s[i]] !== 0) return false
        }
    }
    if (stack.length > 0) return false
    return true
};