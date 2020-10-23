const Modal = (function(){
    let modal = null
    return function () {
        if (!modal) {
            modal = document.createElement('div')
            modal.innerHTML='全局唯一的Modal'
            modal.id = 'modal'
            modal.style.display = 'none'
            document.body.appendChild(modal)
        }
        return modal
    }
}) ()



class OpenButton {
    onClick () {
        const modal = new Modal()
        modal.style.display = 'block'
    }
}

// 定义按钮对应的装饰器
class Decorator {
    constructor (open_button) {
        this.open_button = open_button
    }

    onClick() {
        this.open_button.onClick()
        this.changeButtonStatus()
    }
    changeButtonText() {
        const btn = document.getElementById('open')
        btn.innerHTML = '快去登录'
    }
    disableButton() {
        const btn = document.getElementById('open')
        btn.setAttribute('disable',true)
    }

    changeButtonStatus() {
        this.changeButtonText()
        this.disableButton()
    }
}


const openButton = new OpenButton()
const decorator = new Decorator(openButton)

document.getElementById('open').addEventListener('click', function() {
    decorator.onClick()
})