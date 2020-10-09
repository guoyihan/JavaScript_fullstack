function test() {
    
}

// 函数也是对象, 也能拥有属性
// test.name  test.prototype
// test.[[scope]]  隐式属性   不可能被拿出来使用
// 对象无作用域


// test()   -----> AO: {} // 回收
// test()   -----> AO: {}  多次调用,会创建多个全新的AO

// 全局下的预编译
// GO: {
//     glob: undefined 100,
//     a: function a() {...}
// }

function a() {
    function b () {
        var b =222
    }
    var a = 111
    b()
    console.log(a)
}
var glob = 100
//函数体的预编译
// aAO: {
//     a: undefined 111,
//     b: function b () {...}
// }
// bAO: {
//     b: undefined 222
// }
a()
//找var,function关键字，找到了var提前赋值undefined,如果找到了函数，提前将整个函数体给这个函数名

// a定义 a.[[scope]] ---> 0: GO:{}
// a执行 a.[[scope]] ---> 0: aAO:{}  1:GO:{}
// b定义 a.[[scope]] ---> 0: aAO:{}  1:GO:{}
// b执行 b.[[scope]] ---> 0: bAO:{}  1: aAO:{}  2:GO:{} 作用域链

// b执行完, b的AO就要销毁
// 等a执行完了, a的AO也要销毁,   因为aAO包含b函数,当aAO销毁时b函数直接失效