// 副作用  --hooks模式下状态(state) 发生变更的时候提供我们做额外操作的地方

import React, { useEffect, useState } from 'react'

function Example () {
    const [ count, setCount] = useState(0)

    useEffect(() => {
        console.log(`useEffect  =>  你点击了${count}次`)

    })


    return (
        <div>
            <p>你点了{count}次</p>
            <button onClick={() => {setCount(count + 1)}}>Click me</button>
        </div>
    )
}


export default Example



//1. React 首次渲染和之后的每一次渲染都会调用useEffect
//2. useEffect里面定义的函数时异步执行的,他不会阻碍浏览器更新视图