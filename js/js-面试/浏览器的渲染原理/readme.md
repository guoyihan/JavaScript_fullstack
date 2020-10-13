# DOM树
字节数据 ==> 字符串 ==> 标记(Token)

标记完成后 这些标记会紧接着转换成Node, 不同的Node会根据之前的联系构建一个DOM树

# CSSOM树
过程类似于DOM的产生,但是更加消耗性能,因为样式可以是自行设定的,也可能是继承获得的.
这个过程浏览器得递归CSSOM树,才能确定具体的元素到底是什么样式


# render树
DOM + CSSOM = render
渲染树不是简单的将两者合并,渲染树只会包括 需要显示的节点 和这些节点的样式信息,
比如: display: none 的节点就不再渲染树中显示


当浏览器生成渲染树之后, 就会根据渲染树来进行布局 (回流), 然后GPU绘制



# 为什么操作DOM 慢?
因为DOM树归渲染引擎操作, js归js引擎操作, 当使用js直接操作dom时
会涉及两个线程之间的通信, 势必带来性能损耗,同时还有可能造成重绘.


如果插入万个dom结构不卡顿?
requestAnimationFrame



# 什么情况阻塞渲染
html,css   读取到js,都会暂停DOM树的构建(单线程)

想要渲染更快 
- html 扁平化
- css 优化选择器



# 回流(Reflow) && 重绘(Repaint)
回流: 计算渲染树中每一个节点在设备视图窗口的确切位置和大小, 这个计算的阶段就叫回流

重绘: 拿到渲染树中节点的几何信息后, 将节点转换为屏幕上的实际像素, 这个阶段叫重绘节点


# 何时发生回流 重绘

发生回流:
1. 添加或删除**可见**的DOM元素
2. 元素的位置发生变化
3. 元素的尺寸发生变化 (宽高, 边框大小, 内外边距)
4. 内容变化(文本变化, 替换**不同**尺寸的图片)
5. 页面初次渲染
6. 浏览器窗口尺寸变化
-     回流一定会重绘,重绘不一定回流



# 浏览器的优化机制
目前大多数浏览器都会通过队列化修改批量的回流过程, 浏览器会将修改操作放到队列里,直到一段时间后或者达到阈值, 才会一次性全部重绘, 清空队列。但是,
-      获取布局信息的操作,会强制队列的刷新。
-      offsetTop、offsetLeft、offsetWidth、offsetHeight
       scrollTop、scrollLeft、scrollWidth、scrollHeight
       clientTop、clientLeft、clientWidth、clientHeight
       getComputedStyle()
       getBoundingClientRect()




# 减少回流(重排)和重绘

- 读写分离
将offsetTop、offsetLeft、offsetWidth、offsetHeight等用一个变量来保存,避免多次实时调用



修改单一DOM：
1. cssText
2. 修改类名

批量修改DOM:
1. 使元素脱离文档流，对其进行多次修改，将元素带回文档流中
    - 脱离文档流（指在dom树上，而不是浏览器）的方式：
        1. 隐藏元素
        2. 使用文档片段构建子树
        3. 将原始元素拷贝到脱离文档的节点中，修改后在替换原始元素








