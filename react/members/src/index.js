//入口文件
import React from 'react'  //es6 import  全面使用es6
import ReactDOM from 'react-dom'
import  "./styles.css"// css wxss global.css
import { MyComponent } from './demo.js'

//react  语法  跟小程序的相似÷

function App () {
    return (
        <div className="App">
            App
            <MyComponent />
        </div>
    )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
