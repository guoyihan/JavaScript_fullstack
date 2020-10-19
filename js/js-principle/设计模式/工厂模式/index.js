const yh = {
    name: '逸涵',
    age: 20,
    career: 'coder'
}

const hf = {
    name: '胡飞',
    age: '20',
    career: 'manager'
}

// function User(nme, age, career) {
//     this.name = name
//     this.age = age
//     this.career = career
// }
// const user = new User(name, age, career)


function Coder(name, age) {
    this.name = name
    this.age = age
    this.career = 'coder'
    this.work = ['写代码', '写系统', '改bug']
}

function ProductManager(name, age) {
    this.name = name
    this.age = age
    this.carrer = 'product manager'
    this.work = ['订会议室', '写ppt', '催更']

}

function Factory(name, age, carrer) {
    let work 
    switch(carrer) {
        case 'coder':
            work = ['写代码', '写系统', '改bug']
            break 
        case 'ProductManager':
            work = ['订会议室', '写ppt', '催更']
            break
        case 'boss':
            work = ['喝茶','看报', '见客户'] 
            break
         case 'xxx':
            // ...
    } 
    return new User(name, age, carrer, work)
}
