1. 目前对对象的认知


2. 对象属性的增 删 改 查


3. 对象的创建方法
    - 字面量
    - 构造函数
        1) 系统自带的构造函数  Object()
        2) 自定义


# 构造函数的内部原理  (2.js)
1. 在函数体最前面隐式加上一个 this = {}
2. 执行 this.xxx = xxx
3. 隐式的返回这个this
(构造函数中显式的return 只有是对象(引用值)的情况下， 会干扰原隐式的return， 原始值不会)
原始值：Number、Stirng、Boolean、Null、Underfined
引用值：Object、Function、Array、Date、RegExp


# 包装类   (3.js)
1. 原始值是没有属性和方法的， 属性和方法只有对象才有，这是对象独有的