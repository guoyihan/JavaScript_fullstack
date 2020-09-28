Function.prototype.myBind = function (context) {
    // this指向调用call的对象
    if (typeof this !== 'function') {
        // 调用call的不是函数
        throw new TypeError('Error')
    } 

    // const args = [...arguments].slice[1] 
    const args = Array.prototype.slice.call(arguments, 1)
    // 保存this
    const self = this
    //  定义一个空函数,用来保存原函数的原 型 
    const original = function() {}
    // 绑定的函数
    const bound = function() {
        // this instance of original, 判断是否用new来调用bound
        return self.apply(
            this instanceof original ? this : context,
            args.concat(Array.prototype.slice.call(arguments, 1))
             
        )
    }
     
    
    
    
    
    
    context = context || window 

    // 将调用call函数的对象添加到context属性中 
    context[fn] = this 
    // 执行该属性
    const result = context[fn](...args)
    // 删除该属性
    delete context[fn] 
    // 返回执行结果 
    return result
} 