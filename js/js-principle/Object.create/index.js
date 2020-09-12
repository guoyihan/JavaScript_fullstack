// object.create 的实现原理



let a = {b : 1}

let c = Object.create(a)


function create( object ) {
    if (typeof obj != 'object') {throw TypeError}
    function Ctor() {}
    Ctor.prototype = obj
    let o = new Ctor()
    return o
}