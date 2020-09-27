// 在规定的时间内未触发,则执行

//若在一定的时间内,再次执行,则取消上次的操作,只进行本次的操作
function debounce (func, delay) {
    // 利用闭包保存定时器
    let timer = null
    return function () {
        // 在规定的时间内再次触发, 会清除定时器后重设定时器
        clearTimeout(timer)
        timer = setTimeout(() => {
            func.apply(this, arguments)
        }, delay)
    }
} 


