import { put, takeEvery } from 'redux-saga/effects'
import { GET_INIT_LIST } from './actionTypes'
import axios from 'axios'
import {initListAction} from './actionCreators'

function* getInitList() {
    // console.log.apply('abc ')
    try {
        const res = yield axios.get('http://musicapi.leanapp.cn/comment/music?id=186016&limit=1')
        const action = initListAction(Object.keys(res.data.hotComments[0])) 
        yield put(action)
    } catch(e) {
        console.log('网络请求失败')
    }
    
}


function* mySaga() { //saga必须要是generator函数
    yield takeEvery(GET_INIT_LIST, getInitList)
}
export default mySaga


