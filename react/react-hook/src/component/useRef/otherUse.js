//useRef 保存普通变量

import React, { useState, useEffect, useRef } from 'react';

function Example(){
    //inputEl这个变量是useRef函数的返回值, 那么这个变量给谁当ref属性, 就能表示该元素的DOM结构
    const inputEl =  useRef(null)

    const onButtonClick = () => {
        inputEl.current.value = 'mg很帅'
        console.log(inputEl)
    }
// ----------------------------------------
    const [text, setText] = useState('mg')
    const textRef = useRef()

    useEffect(() => {
        textRef.current = text
        console.log(textRef.current)
    })
// ----------------------------------------
    return (
        <>
            <input ref={inputEl} type="text" />
            <button onClick={onButtonClick} >在input上展示文字</button>
            <br/>
            <hr/>
            <input value={text} onChange={(e) => {setText(e.target.value)}}/>
        </>
    )
}

export default Example;