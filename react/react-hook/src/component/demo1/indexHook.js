import React, { useState } from 'react'
//useState 就是一个hook

function Example () {
    const [ count, setCount ] = useState(0)
    //let _useState = useState(0)
    //let count = _useState[0]
    //let setCount = _useState[1]


    // const [ name, setName ] = useState(0)
    // setCount == this.setState({count: 'number'})
    return  (
        <div>
            <p>你点了{count}次</p>
            <button onClick={() => {setCount(count + 1)}}>Click me</button>
        </div>
    )
}


// useState 多状态

function Example2 () {

    const [ age, setAge ] = useState(0)
    const [ sex, setSex ] = useState('男')
    const [ work, setWork ] = useState('前端程序员')


    // react 是如何保证useState找到自己对应的state
    // react 是根据useState出现的顺序来确定的
    // react Hooks 不能出现在条件判断语句中, 因为他必须有完全一样的渲染顺序
    return (
        <div>
            <p>蜗牛 今年: {age} 岁</p>
            <p>性别: {sex}</p>
            <p>工作是: {work}</p>
        </div>
    )
}


export default Example2



// hooks 本质上就是一类特殊的函数, 目的就是让你不再写 class, 让 function 一统江湖