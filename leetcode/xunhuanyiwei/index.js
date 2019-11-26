// [1, 2, 3, 4, 5, 6, 7]  k = 3
// 7 1 2 3 4 5 6
// 6 7 1 2 3 4 5 
// 5 6 7 1 2 3 4


// 1.
// var arr = [-1, -100, 3, 99],
//     k = 2
// function RShift (list, k) {
//     const copy = [...list]
//     const n = list.length
//     if (k % n === 0) return
//     for(let i = 0; i < n; i++) {
//         list[i] = copy[(k + i) % n]
//     }
//     return list
// }
// console.log(RShift(arr, k))


// 2.
// var arr = [-1, -100, 3, 99], k = 2
// function RShift (list, k) {
//     const n = list.length
//     if (k % n === 0) return list
//     let cnt = Math.abs(k > 0 ? k % n : n + (k % n))   //排除 k为负数和0得情况
//     let t = null
//     while (cnt--) {
//         t = list[n - 1]
//         for (let i = n - 1; i > 0; i--) {
//             list[i] = list[i - 1]
//         }
//         list[0] = t
//     }
//     return list
// }
// console.log(RShift(arr, k))


// 3.
var arr = [-1, -100, 3, 99], k = 2
function reverse(list ,start, end) {
    let t = null
    while (start < end) {
        t = list[start]
        list[start] = list[end]
        list[end] = t
        start ++
        end --
    }
}
function RShift(list, k) {
    const n = list.length
    if (k % n === 0) return list
    reverse(list, 0, n-k-1)
    reverse(list, n-k, n-1)
    reverse(list, 0, n-1)
    return list
}
console.log(RShift(arr, k))
