let obj = {
    a: 1
}
// delete get set hasOwnProperty getPrototypeof setPrototypeof
Object.getPrototypeOf(obj)
Object.setPrototypeOf(obj, {b: 2})

let newobj = new Proxy(obj, {
    get (target, k) {
        // if (target.hasOwnProperty(k)) {

        // }
        return Reflect.get(target, k)
    },
    set () {},
    deleteProperty () {},
    defineProperty () {},
    has () {},
})

let f = () => {

}
let newf = new Proxy(f, {
    apply (...rest) {
        console.log('f call');
        return Reflect.apply(...rest)
    }
})