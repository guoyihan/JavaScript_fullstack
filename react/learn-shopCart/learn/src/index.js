// 入口
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Lifecycle from './components/Lifecycle'
import CommentVs from './components/CommentVs'
import PureComponentTest from './components/PureComponentTest'
import ButtonTest from './components/ButtonTest'
import withName from './components/Hoc'
import Hoc from './components/Hoc'
import ContextSample from './components/ContextSample'
import HooksTest from './components/HooksTest'
import KFormCreate from './components/KFormCreate'


//import App from './App'

// class App extends React.Component {
//     render() {// props
//         return <div>
//                     hello {this.props.name} ,i am {9 + 9} years old.
//                </div>
//     }
// }


// state
// 生命周期
// class Counter extends React.Component {
//     constructor (props) {
//         super(props) // 继承Counter里的React.Component
//         // 初始化构造器时设置内部状态 num值为1
//         this.state = {
//          num: 1
//         }
//         this.handleClick = this.handleClick.bind(this)
//     }
//     // 生命周期方法, 组建渲染完成
//     componentDidMount() {
//         console.log('componentDidMount,函数触发')
//     }
//     // 生命周期方法,避免组件重复或者无意义的渲染
//     shouldComponentUpdate(nextProps, nextState) {
//         console.log(nextProps)
//         console.log(nextState)
//         if (nextState.num%2) {
//             return true
//         }
//         return false
//     }
//     handleClick() { //需要绑定到Counter这个类上才能生效
//         this.setState({
//             num: this.state.num + 1
//         })
//     }
//     render() {
//         return (
//         <div>
//             <p>{this.state.num}</p>
//             <button onClick={this.handleClick}>click</button>
//         </div>
//         )
//     }  
// }


//表单
//渲染列表
// class Todolist extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             text: '帅气的woniu',
//             todos: ['Learn react', 'Learn-Ant-design', 'Learn Koa']
//         }
//         this.handleChange = this.handleChange.bind(this)
//         this.handleClick = this.handleClick.bind(this)
//     }
//     handleChange(e) { 
//         console.log(e.target.value)
//         this.setState({
//             text: e.target.value
//         })
//     }
//     handleClick() {
//         if (this.state.text) {
//             this.setState(state => ({
//                 // 将text的值追加到todos里
//                 text: '',
//                 todos: [...state.todos, state.text]
//             }))

//             // this.setState({
//             //     // 将text的值追加到todos里
//             //     text: '',
//             //     todos: [...this.state.todos, this.state.text]
//             // })
//         }
//     }
//     render() {
//         return (
//             <div>
//                 {this.state.text}
//                 <input type="input" value={this.state.text} onChange={this.handleChange}/> 
//                 <button onClick={this.handleClick}>add</button>
//                 <ul>
//                     {this.state.todos.map( v => {
//                         return <li key={v}>{v}</li>
//                     })}
//                 </ul>
//             </div>
//         )
//     }
// }


//React 16  新增
// 1.render() 函数支持返回数组和字符串
// 2.异常处理,  添加componentDidCatch 钩子(函数)  获取组件的错误
// 3.新的组件类型

class React16 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hasError: false
        }
    }

    render() {
        return (
            <div>
            {this.state.hasError ? <div>出错了</div> : null}
            <ClickWriteError/>
            <FeatureReturnFraments/>
            </div>
            )
    }
}

//ClickWriteError 是一个组件
class ClickWriteError extends Component {
    constructor (props) {
        super(props)
        this.state = {
            error: false
        }
        this.handClick = this.handClick.bind(this)
    }
    handClick() {
        this.setState({
            error: true
        })
    }
    render () {
        if(this.state.error) {
            throw new Error('出错了')
        }
        return <button onClick={this.handClick}>抛出错误</button>
    }
}

// FeatureReturnFraments也是一个子组件
class FeatureReturnFraments extends React.Component{
    render() {
        return [
            <p key="1">React 很不错</p>,
            '文本1',
            <p key="2">Ant 很不错</p>,
            '文本2'
        ]
    }
}


// ReactDOM.render(<PureComponentTest body='react is very good'author='facebook'/>, document.getElementById('root'))
// ReactDOM.render(<withName/>, document.getElementById('root')) //会报错 因为withName还不是一个组件
// ReactDOM.render(<Hoc state="React"/>, document.getElementById('root'))
// ReactDOM.render(<ContextSample/>, document.getElementById('root'))
// ReactDOM.render(<HooksTest/>, document.getElementById('root'))
ReactDOM.render(<KFormCreate/>, document.getElementById('root'))

