function greeter(person: string) {
    return "hello" + person
}
const user = "wn"
// greeter(1)



// 类型
// const isLoading: Boolean = false
// isLoading = 123


// let num = 6
// num = '8'


// let book: string = 'typeScript'

function warnUser() : void {

}

const a: void = undefined
let aa: any = undefined


//symbol 唯一值
let sym1: Symbol = Symbol('key1')
let sym2 = Symbol('key2')

//BigInt
const max = BigInt(Number.MAX_SAFE_INTEGER)

const max1 = max + 1n
const max2 = max + 2n

console.log(max1 === max2)
