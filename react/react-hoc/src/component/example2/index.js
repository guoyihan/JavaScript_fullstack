import React, { Component } from 'react'
import

// Hoc 高阶组件
function HOC(WrappedCopmponent) {
    return class extends Component {
        constructor (props) {
            super (props)
            this.state = {
                name: ''
            }
        }

        onChange = (event) => {
            this.setState({
                name: event.target.value        
            })
        }

        render () {
            const newProps = {
                name: {
                    value: this.state.name,
                    onChange: this.state.onChange
                }
            }
            return <WrappedCopmponent {...newProps}/>
        }
    }
}



// const Example = HOC(Example)
// 使用by装饰器 
@HOC
class Example extends Component {
    render () {
        return (
            <input {...this.props.name}/>
        )
    }
}




export default Example 