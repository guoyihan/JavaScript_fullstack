import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

const state = {
    count: 1
}

const mutations = {
    add(state) {
        state.count++
    },
    reduce(state) {
        state.count--
    }
}

const actions = {  // 提交mutations里面的方法
    addAction(context) {
        context.commit('add')
    }
}

const getters = {
    count: (state) => {
        return state.count += 100
    }
}


export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
})