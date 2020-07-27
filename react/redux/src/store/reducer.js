import {CHANG_INPUT_VALUE, ADD_TO_ITEM, DELETE_TODO_ITEM} from './actionTypes'


const defaultState = {
    inputValue: '',
    list: []
}

//state 指的是store里面上一次存储的数据
//action 用户传过来的那句话
export default (state = defaultState, action) => {
    if(action.type === CHANG_INPUT_VALUE) {
        const newState = JSON.parse(JSON.stringify(state))  //用JSON深拷贝
        newState.inputValue = action.value
        return newState// reducer 有一个限制  可以接受state, 但是绝对不能修改state
    }


    if(action.type === ADD_TO_ITEM) {
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
    console.log(state, action)
    return  state
}