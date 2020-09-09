// 防抖
export function debounce(func, delay) {
    let timer 

    return function (...args) {
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            func.apply(this, args) // 作用域会被改变,所以得用apply指回来
        }, delay)
    }
}