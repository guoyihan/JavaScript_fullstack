const delay = (data, tick) => new Promise(resolve => {
    setTimeout(() => {
        resolve(data)
    },tick)
})
module.exports = {
    getName () {
        return delay('Jerry', 1000)
    },
    getAge () {
        return  20
    }
}