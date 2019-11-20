import Vue from 'vue'

import Notification from './notification'
import { notification } from 'path'

// new Swiper()
// new Gcode()
// 面向对象有一个好处, 达到代码复用

const NotificationConstructor = Vue.extend(Notification)

// <div>notifi</div>
// toast

let notification
export const open = ({ title, content }) => {
    if (notification) {
        notification.title = title
        notification.content = content
    } else {
        notification = new NotificationConstructor({
            el: document.createElement('div'),
            propsData: {
                visiable: true,
                title,
                content
            }
        })
        document.body.appendChild(notification.$el)
    }
}

export const close = function () {
    notification.visiable = false
    document.body.removeChild(notification.$el)
    notification = null
}