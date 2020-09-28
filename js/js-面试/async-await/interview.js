// 第五题:输出什么，
// async/await原理是什么，把下
// 面这段代码翻译成Promise
function getJson() {
    return new Promise((resovle, reject) => {
        setTimeout(function () {
            console.log(2)
            resovle(2)
        }, 2000)
    })
}
async function testAsync() {
    await getJson()
    console.log(3)
}
testAsync()



function testAsync () {
    return new Promise.resolve().then(function(){
        return getJson()
    }).then(function() {
        console.log(3)
    })
}
