// 抽象工厂
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

class FakeStar extends MobliePhoneFactory {
    // 提供操作系统的接口
    createOS() {
        return new AndroidOS()
    }
    // 提供硬件的接口
    createHardWare() {
        return new QualcommHardWare()
    }
}
class OS{
    controlHardWare() {
        throw new Error('你需要将我重写')
    }
}
class AndroidOS extends OS{
    controlHardWare() {
        console.log('我会用安卓的方式去操作系统');
    }
}
class AppleOS extends OS {
    controlHardWare() {
        console.log('我会用苹果的方式去操作系统');
    }
}



class HardWare {
    operateByOrder() {
        throw new ErrorEvent('你需要将我重写')
    }
}
class QualcommHardWare extends HardWare{
    operateByOrder() {
        console.log('我会用高通的方式去运转')
    }
}
class MiWare extends HardWare{
    operateByOrder() {
        console.log('我会用小米的方式去运转')
    }
}

class NewStarFactory extends MobliePhoneFactory {
    createOS() {
        return new AndroidOS()
    }

    createHardWare() {
        return new QualcommHardWare()
    }
}

// 这是我的手机
const myPhone = new FakeStar()
// 让它具备操作系统
const myOS = MyPhone.createOS()
// 让它具备硬件
const myHardWare = MyPhone.createHardWare()
myOS.controlHardWare()
myHardWare.operateByOrder()
