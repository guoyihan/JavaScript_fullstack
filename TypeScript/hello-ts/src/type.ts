// 其他常见的类型

// any
let notSure: any  = 4
notSure = 'daads'


// unknow 和 any的区别
let value: any
value = true
value = 1
value = 'hello'
value = Symbol('type')
value = {}
value = []
value.foo();
value()
new value()
value[0][1]


let value2 :unknown
value2 = true
value2 = 1
value2 = 'hello'
value2 = Symbol('type')
value2 = {}
value2 = []
// 报错  原因: unknow 在被赋值类型前 不可以操作,而any可以
// value2.foo();
// value2()
// new value2()
// value2[0][1]

// never 强行闲置某个变量为什么样子
const empty: never[] = []
//empty.push(1)
function error(message: string) {
    throw new Error(message)
}


// 数组
const list1: string[] = ['1', '2', '3']
const list2: number[] = [1, 2, 3]
const list: (string | number)[] = [2, '1']
const list3: Array<number> = [1, 2, 3] //泛型

// 对象
let obj: object
obj = [1]
obj = [1, '2']
obj = {}