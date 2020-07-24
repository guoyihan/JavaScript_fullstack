// useMemo (useCallback) 优化React Hooks 程序的性能

import React, { useMemo, useState } from 'react'

function Example () {
    const [ wn, setWn ] = useState('wncoding')
    const [ zm, setZm ] = useState('zmcoding')

    return (
        <>
            <button onClick={() => {setWn(new Date().getTime())}}>wn</button>
            <button onClick={() => {setZm(new Date().getTime() + ',mg 很帅')}}>zm</button>
            <Child name={zm}>{wn}</Child>
        </>
    )
}


function Child ({name, children}) {
    function changeZm (name) {
        console.log('他来了,猛哥向我们走来了')
        return name + ',猛哥向我们走来了'
    }
    
    // const actionZm = changeZm(name)
    const actionZm = useMemo(() => changeZm(name), [name])
    return (
        <>
            <div>{actionZm}</div>
            <div>{children}</div>
        </>
    )
}


export default Example
