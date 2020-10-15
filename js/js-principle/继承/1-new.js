function newfunc(f) {
    let obj = {
        __proto = f.prototype
    }
    f.call(obj, ...arguments)
    return obj
}