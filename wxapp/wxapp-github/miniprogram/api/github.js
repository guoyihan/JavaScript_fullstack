const trendings = () => new Promise((resolve, reject) => {
setTimeout(() => {
    resolve([{
        repo: '阿雷项目'
    }])
}, 2000)
})


const getRepo = () => new Promise((resolve, reject) => {
    
})


module.exports = {
    trendings,
    getRepo
}