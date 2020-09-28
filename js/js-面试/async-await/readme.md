1. 函数声明式, 函数表达式, 对象方法, class方法, 箭头函数 都可以声明async
2. * 任何一个的await语句后面的Promise对象变为reject, 那么整个async函数会中断
3. 返回的是一个promise对象, 必须等到所有的await命令后面的Promise对象执行完才会发生状态改变

1. async定义的是一个Promise函数和普通函数一样只要不调用就不会进入事件队列。
2. async内部如果没有主动return Promise，那么async会把函数的返回值用Promise包装。
3. await关键字必须出现在async函数中，await后面不是必须要跟一个异步操作，也可以是一个普通表达式。
4. 遇到await关键字，await右边的语句会被立即执行然后await下面的代码进入等待状态，等待await得到结果。
await后面如果不是 promise 对象, await会阻塞后面的代码，先执行async外面的同步代码，同步代码执行完，再回到async内部，把这个非promise的东西，作为 await表达式的结果。
await后面如果是 promise 对象，await 也会暂停async后面的代码，先执行async外面的同步代码，等着 Promise 对象 fulfilled，然后把 resolve 的参数作为 await 表达式的运算结果。