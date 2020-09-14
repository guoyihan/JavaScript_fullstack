// object.create 的实现原理



let a = {b : 1}

let c = Object.create(a)


function create( object ) {
    // if (typeof obj != 'object') {
    //     throw TypeError
    // }
    
    // let obj = object
    // obj.__proto__ = object
    // return obj
    return { __proto__: object}
}