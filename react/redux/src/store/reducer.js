import {CHANG_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_LIST_ACTION} from './actionTypes'


const defaultState = {
    inputValue: '221',
    list: [1,2]
}

//state 指的是store里面上一次存储的数据
//action 用户传过来的那句话
//纯函数指的是,给定固定的输入,就一定会有固定的输出,且不会有任何的副作用
export default (state = defaultState, action) => {
    if(action.type === CHANG_INPUT_VALUE) {
        const newState = JSON.parse(JSON.stringify(state))  //用JSON深拷贝
        newState.inputValue = action.value
        return newState// reducer 有一个限制  可以接受state, 但是绝对不能修改state
    }

    if(action.type === ADD_TODO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue = ''
        return newState
    }

    if(action.type === DELETE_TODO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index, 1)
        return newState
    }

    if(action.type === INIT_LIST_ACTION) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list = action.data        
        return newState

    }
    // console.log(state, action)

    return  state
}