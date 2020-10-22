// function sun(a, b, c) {
//     console.log(a + b + c);
// }

// let _sum =  curry(sum)


// function fn(a, b, c, d, e) {
//     console.log(a, b, c, d, e);
// }
// let _fn = curry(fn)


//降低函数的通用性, 提高函数的适用性

function checkByRegExp(regExp, string) {
    return regExp.test(string)
}
let _check = curry(checkByRegExp)
let checkCellPhone = _check(/^\d{10}/)

function curry(fn, len = fn.length) {
    return _curry.call(this,fn,len )
}
function _curry (fn, len, ...args) {
    return function(...params) {
        let _args = [...args, ...params]
        if (_args.length >= len) {
            return fn.apply(this, _args)
        } else {
            return _curry.call(this, fn, len, ...args)
        }
    }
}