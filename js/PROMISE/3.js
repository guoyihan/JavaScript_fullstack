function xq() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('相亲')
            resolve('相亲成功,嘿嘿')
    
        }, 2000)
    })
} 
xq()
.then((res) => {
    return marry()
})
.then((res) => {
    return baby1()
})
.then((res) => {
    baby2()
})



function marry () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('结婚')
            resolve('结婚顺利')
        }, 1000)
    })
    
}

function baby1 () {
    return new Promise((resolve, reject) => {
        setTimeout (() => {
            console.log('出生1')
            resolve('111')
        }, 500)
    })
    
}
function baby2 () {
    setTimeout (() => {
        console.log('出生2')
    }, 300)
}

