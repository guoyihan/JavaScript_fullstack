
function getData() {
    setTimeout(() => {
        return 'JSON'
    }, 500)
}

// 需要使用上面的异步函数的函数前面加上async 声明这是一个异步函数
async function testAsync() {
    // 在异步函数前面加上await ,函数执行就会等待await 声明的异步函数执行完毕,再往下执行
    try {
        await getData()
    } catch(error) {
        console.log(error);
    }
    // ...剩下的代码
}




