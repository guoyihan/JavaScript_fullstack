// PureComponent 组件 ,其实就是定制化后的ShouldComponentUpdate 的加强版

import React, { Component, PureComponent } from 'react'

//ShouldComponentUpdate 的加强版

 class PureComponentTest extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            comments:[
                { body: 'react is very good', author: 'facebook' },
                { body: 'vue is very good', author: 'youyuxi' }
            ]
        }

        setTimeout(() => {
            this.setState({
                comments:[
                    { body: 'react is very good', author: 'facebook' }
                ]
            })
        }, 4000)
    }



    render () {
        return (
            <div>
                {this.state.comments.map((c, i) => (
                <Comment data={c} key={i}/>
            ))}
            
            </div>
        )
    }
}


class Comment extends PureComponent{
    constructor (props) {
        super(props)

    }


    //PureComponent相当于执行了shouldComponentUpdate这个生命周期里的代码
    // shouldComponentUpdate(nextProp) {
    //     console.log(nextProp)
    //     if (nextProp.data.body === this.props.data.body && nextProp.data.author === this.props.data.author) {
    //         console.log(false)
    //         return false
    //     }
    //     return true
    // }


    render() {
        console.log('render')
        return (
            <div>
                <p>{this.props.data.body}</p>
                <p> -- {this.props.data.author}</p>
            </div>
        )
    }
}
 export default PureComponentTest