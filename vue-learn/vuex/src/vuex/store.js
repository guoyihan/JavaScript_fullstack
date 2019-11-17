import Vue from 'vue'
import Vuex from 'vuex'
import { isContext } from 'vm'

Vue.use(Vuex)


const state = {
    count: 1
}

const mutations = {
    add (state, n) {
        state.count += n
    },
    reduce (state) {
        state.count--
    }
}


const actions = {   //调用mutations里的 实现异步     context 为上下文
    // addAction (context) {
    //     context.commit('add', 10)
    // }
    addAction (context, status) {
        context.commit('add', status)
    },
    reduceAction({commit}) {
        setTimeout(() => {
            commit('reduce')
        }, 3000);
        console.log('我比reduce先执行')
    }
}


const getters = {
    getCount: (state) => {
        return state.count + 100
    }
}

export default new Vuex.Store({
    state ,   // 将stare抛入仓库里
    mutations,
    getters,
    actions
})