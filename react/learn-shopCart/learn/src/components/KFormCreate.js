// 拥有form表单的布局与提交功能
// formItem 收集错误信息的功能
// input 输入框前增加icon
// 提供input输入框空间提示事件处理,  表单校验功能
import React, { Component, isValidElement } from 'react'
import { Icon } from 'antd'

//hoc: 包装用户单位 ,增加数据管理和校验
function KFormCreate (Comp) {
    return class NewComp extends Component {
        constructor (props) {
            super(props)
            this.options = {} //字段选项设置
            this.state = {}  // 字段值
        }

        //处理表单输入事件
        handleChange = e => {
            const { name, value } = e.target
            this.setState (
                {
                    [name]: value
                },
                () => {
                    //数据变化以后在校验
                    this.validateField(name)
                }
            )
        }


        //表单校验
        validateField(field) {
            const rules = this.options[field].rules
            //只要账户密码任何一个失败 就失败
            const ret = rules.some(rule => {
                if (rule.required) {
                    // 仅验证必填项目
                    if (this.state[field]) {
                        //校验失败
                        this.setState({
                            [field + "Message"]: rule.message
                        })
                        return true
                    }
                }
            })
            if(!ret) {
                //没失败
                this.setState({
                    [field + "Message"]: ''
                })
                return !ret
            }
        }
    }
}

class FormItem extends Component {
    render () {
        return (
            <div className="formItem">
                {/* {this.props.children} */}
                {this.props.validateStatus === "error" && (
                    <p style={{color: 'red'}}>{this.props.help}</p>
                )}
            </div>
        )
    }
}

class KInput extends Component {
    render () {
        return (
            <div>
                {this.props.prefix}
                <input {...this.props} />
            </div>
        )
    }
}


@KFormCreate
class KFormSample extends Component {
    onSubmit = () => {
        this.props.validateStatus(isValid => {
            if(isValid) {
                console.log('校验成功,提交登录', this.props.value)
            } else { 
                console.log('校验失败')
            }
        })
    }
    render() {
        const { getFieldDec, isFieldTouched, getFieldError } = this.props //添加属性方法
        const userNameError = isFieldTouched('uname') && getFieldError('uname')
        const passwordError = isFieldTouched('pwd') && getFieldError('pwd')
        return (
            <div>
                <FormItem 
                validateStatus={userNameError ? "error" : null}
                help={userNameError || ''}>
                    {getFieldDec('uname', {
                        rules: [{required: true, message: '请填写用户名'}]
                        },
                        <KInput type='text' prefix={<Icon type="user" />}></KInput>
                    )}
                </FormItem>

                <FormItem 
                validateStatus={passwordError ? "error" : null}
                help={passwordError || ''}>
                    {getFieldDec('pwd', {
                        rules: [{required: true, message: '请填写密码'}]
                        },
                        <KInput type='password' prefix={<Icon type="lock" />}></KInput>
                    )}
                </FormItem>
                <button onClick={this.onSubmit}>登录</button>
            </div>
        );
    }
}

export default KFormSample; 