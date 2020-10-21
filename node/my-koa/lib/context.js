let proto = {}

function defineGetter(prop, name) { // prop代表对象,   name代表对象上的属性
    proto.__defineGetter__(name, function() { // 每个对象都有__defineGetter__
        return this[prop][name] // url == this.request.url
    })
}
function defineSetter(prop, name) { // prop代表对象,   name代表对象上的属性
    proto.__defineSetter__(name, function(val) { // 每个对象都有__defineSetter__
        this[prop][name] = val // url == this.request.url
    })
}

defineGetter('request','url')
defineGetter('request','path')
defineGetter('response', 'body')
defineSetter('response', 'body')


module.exports = proto