import React from 'react'

const withMouse = (Component) => {
    return class extends React.Component {
        state = { x: 0, y: 0}
        

        handleMouseMove(e) {
            this.setState({
                x: e.clientX,
                y: e.clientY
            })
        }  


        render() {
            return (
                <div style={{height: '100vh'}} onMouseMove={this.handleMouseMove}> 
                    <Component {...this.props}/>
                </div>
            )
        }
    }
}

//定义一个纯函数无状态组件

const App = (props) => {
    const { x, y } = props.mouse
    return (
        <div style={{height: '100vh'}}>
            <h1>the mouse position is {x}, {y}</h1>
        </div>
    )
}

const AppWithMouse = withMouse(App) // 高阶组件替组件干活

export default AppWithMouse