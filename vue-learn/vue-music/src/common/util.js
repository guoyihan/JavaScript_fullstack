// 功能函数: 防抖动
export function debounce (func, delay) {
    let timer
    return function (...args) {
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout (() => {
            func.apply(this, args)
        }, delay)
    }
}