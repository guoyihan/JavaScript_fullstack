//redux = flux + reduce
import React, { Component } from 'react';
import 'antd/dist/antd.css'
import store from './store/index.js'
// import {CHANG_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM} from './store/actionTypes'
import { getInitList, getInputChangeAction, getAddItemAction, getDeleteItemAction } from './store/actionCreators'
import TodoListUI from './TodoListUI'



// store 的创建

class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = store.getState()
        // console.log(this.state)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleStoreChange = this.handleStoreChange.bind(this)
        this.handleBtnClick = this.handleBtnClick.bind(this)
        this.handleItemDelete= this.handleItemDelete.bind(this)
        store.subscribe(this.handleStoreChange)  //只要store里面的数据发生变化,就实时获取
    } 

    //数据请求
    componentDidMount() {
        // redux-thunk
        // const action = getTodoList()
        // store.dispatch(action)//  因为此刻的store已经集成的thunk的功能,所以支持dispatch一个函数,这个函数会自动执行
        // axios.get('https://api.github.com/users/octocat/gists').then((res) => {
        //     console.log(res)
        //     const data = res.data
        //     const action = initListAction(Object.keys(data.hotComment))
        //     store.dispatch(action)
        // })
        
        const action = getInitList()
        store.dispatch(action)
        
    }

    handleInputChange(e) {
        // const action = {
        //     type: CHANG_INPUT_VALUE,
        //     value:  e.target.value
        // }

        const action = getInputChangeAction(e.target.value)
        store.dispatch(action) //让管理员听到这句话
    }

    handleStoreChange(){
        console.log('store changed')
        this.setState(store.getState())
    }

    handleBtnClick() {
        // const action = {
        //     type: ADD_TO_ITEM
        // }
        const action = getAddItemAction()
        store.dispatch(action)
    }

    handleItemDelete(index) {
        // console.log(index)
        // const action = {
        //     type: DELETE_TODO_ITEM,
        //     index
        // }
        const action = getDeleteItemAction(index)
        store.dispatch(action)
    }

    render() {
        return (
        <TodoListUI 
        inputValue={this.state.inputValue}
        list={this.state.list}
        handleInputChange={this.handleInputChange}
        handleBtnClick={this.handleBtnClick}
        handleItemDelete={this.handleItemDelete}
        />
        )
    }
}

export default TodoList;


// class TodoList extends Component{
//     constructor(props) {
//         super(props)
//         this.state = store.getState(store)
//         this.handleStore = this.handleStore.bind(this)
//         store.subscribe(this.handleStore)
//     }

//     handlechange(e) {
//         const action = {
//             type: CHANG_INPUT_VALUE,
//             value: e.target.value
//         }
//         store.dispatch(action)  
//     }

//     handleStore() {
//         this.setState(store.getState())
//     }

//     handleclick() {
//         const action = {
//             type: ADD_TO_ITEM,
//         }
//         store.dispatch(action)
//     }

//     handledelete(index) {
//         const action = {
//             type: DELETE_TODO_ITEM,
//             index
//         }
//         store.dispatch(action)
//     }



//     render () {
//         return(
//             <div style={{marginTop: '20px', marginLeft: '20px'}}>
//                 <div>
//                     <Input 
//                     style={{width: '300px',marginRight: '10px'}}
//                     placeholder="info"
//                     value={this.state.inputValue}
//                     onChange={this.handlechange.bind(this)}
//                     />
//                     <Button
//                     onClick={this.handleclick.bind(this)}
//                     >提交</Button>
//                     <List
//                     style={{width: '300px',marginTop: '10px'}}
//                     dataSource={this.state.list}
//                     bordered
//                     renderItem={(item, index) => (
//                         <List.Item
//                         onClick={this.handledelete.bind(this, index)}
//                         >
//                             {item}
//                         </List.Item>
//                     )}
//                     >
//                     </List>
//                 </div>
//             </div>
//         )
        
//     }
// }

// export default TodoList