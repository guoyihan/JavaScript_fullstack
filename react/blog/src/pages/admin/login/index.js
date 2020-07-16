import React, { Component } from 'react'
import { Form, Input, Button, Card, Message } from 'antd'
import { UserOutlined, LockOutlined } from  '@ant-design/icons'
import './index.less'
import Particles from 'reactparticles.js'

class Login extends Component{
    constructor(props) {
        super(props)
        this.State = {
            loading:false,
            username: '',
            password: ''
        }
    }


    handleSubmit = (e) => {
        // e.preventDefault()
        sessionStorage.setItem('blogUser', 'wn')
        sessionStorage.setItem('menuItemKey', '0')
        this.props.history.push('/web/index')
        
    }

    render () {
        return (
            <div className='login'>
                <Particles id="particles1" config="particles1.json" height="90%"/>
                <Card className="login-form" style={{width: 300, borderRadius: 4}}>
                    <Form onFinish={this.handleSubmit}>
                        <Form.Item
                        name="username"
                        rules={[{ required: true, message: '请输入用户名!'}]}
                        >
                            <Input prefix={<UserOutlined style={{color: 'rgba(0, 0, 0, 0.25'}} />} placeholder="请输入用户名" />
                        </Form.Item>
                        <Form.Item
                        name="password"
                        rules={[{ required: true, message: '请输入密码!'}]}
                        >
                            <Input prefix={<LockOutlined style={{color: 'rgba(0, 0, 0, 0.25'}} />} placeholder="请输入密码名" />
                        </Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button" block>Log in</Button>
                    </Form>
                </Card>
            </div>
        )
    }
}


// const Login = Form.create({ name: 'normal_login' })(login)
export default Login