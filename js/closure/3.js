// 实现一个函数执行出来的结果都是累加的
function test() {
    var count = 0
    function b() {
        count++
        console.log(count)    
    }
    
    return b
}
var a = test()
a()
a()
a()
a()


