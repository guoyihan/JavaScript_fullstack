# 原型链
1. 在原型上加一个原型,再加上一个原型..., 把原型连成链 ,访问顺序也依照这个链的顺序进行,叫做原型链
2. 原型链的 增删改查
    查: 由近到远的查
    改: 原型自己改
    增: 原型自己增
    删: 原型自己删 (但是!!!)
  * 实例对象无法修改构造函数原型上的属性,除非使用引用类型的方式

3. 绝大多数对象最终都会继承自 Object.prototype 