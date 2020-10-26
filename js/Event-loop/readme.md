# 1.进程和线程的区别?    2.js单线程的优缺点?
进程是指cpu在运行指令及保存和加载上下文所需的时间
线程是进程中一个更小的单位,它描述的是执行一段指令所需要的时间


# 什么是执行栈?
执行栈是一个存储函数调用的栈结构

# Event-loop
同步代码
异步代码  - 微任务(microtask)  - 宏任务(macrotask)
1. window-event-loop  最常遇到的
2. worker-event-loop  前端里面,  有web-worker(另外一个线程)
3. worklet-event-loop  代码跑在worklet里面




微任务: process.nextTick, promise, MutationObserver(观察DOM结构变化的接口)
宏任务: script,setTimeout,setInterval,setImmediate,I/O, UI rendeing


# EventLoop执行顺序:
1. 首先执行同步代码, 这也属于宏任务
2. 当执行栈完同步代码以后,执行栈为空,查询是否有异步代码需要被执行
3. 执行微任务
4. 当执行完所有的微任务以后, 如果有必要会渲染页面
5. 然后开始下一轮EventLoop, 执行宏任务里的异步代码

微任务和宏任务区别
1. 执行时机不同，宏任务在下一次event-loop中，微任务在本次event-loop结束后执行
2. 一次event-loop只会执行属于一个宏任务队列，而微任务可以一直执行