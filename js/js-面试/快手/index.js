let b = [1, 2, 3, [4, [5, [6]]],3,25,[23,2]]
function a (arr) {
    let res = [], stack = [...arr]
    while(stack.length) {
        let item = stack.pop()
        if(Array.isArray(item)) {
            stack.push(...item)
        } else {
            res.unshift(item)
        }
    }
    let flat = Array.from(new Set(res))
    return flat
    // return res
}
console.log(a(b))