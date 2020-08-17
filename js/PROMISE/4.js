function a () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('aaa')
            resolve('yes')
        },1000)
    })
    
}
function b () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('bbb')
            reject('no')
        },1000)
    })
}
function c () {
    setTimeout(() => {
        console.log('ccc')
    },500)
}
function d () {
    setTimeout(() => {
        console.log('ddd')
    },3000)
}
function e () {
    console.log('eee')

}



// class promise {
//     constructor() {
//         status: pending
//     }
//     resolve() {
//         this.status = 'resolved'
//     }
//     reject() {
//         this.status = 'reject'
//     }
//     then () {
//         if (this.status == 'resolved') {
//             //...
//         }
//     }
//     catch() {
//         if (this.status == 'reject') {
//             //...
//         }
//     }
//     finally() {
//         // ...
//     }
// }



// promise pending(进行中)  resolved(已成功)   reject(已失败)

// finally   不管promise 最后是个什么状态,都会执行finally里面
a()
.then(b)
.catch(c)
.finally(d)

// all
// Promise.all([a(), b()]).then(e)

// race
Promise.race([a(), b()]).then(e)