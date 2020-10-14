import { createStore } from 'vuex'
import * as types from './action-type'
import * as api from '../api/index'



export default createStore({
  state: {
    planList: []
  },
  getters: {
    allTime: () => {
      return 0
    }
  },
  mutations: {
    [types.ADD_PLAN](state, payload) {
      state.planList = [...state.planList, payload]

    },
    [types.DELETE_PLAN](state, payload) {
      state.planList = state.planList.filter(item => {
        return item._id !== payload.id
      })

    },
    [types.GET_PLAN_LIST](state, payload) {
      state.planList = payload
    }
  },
  actions: {
    async [types.GET_PLAN_LIST]({ commit }) {
      let planList = await api.getPlanList()
      commit(types.GET_PLAN_LIST, planList)
    },
    async [types.ADD_PLAN]({ commit }, payload) {
      let plan = await api.getPlanList(payload)
      commit(types.ADD_PLAN, plan)
    },
    async [types.DELETE_PLAN]({ commit }, payload) {
      let plan = await api.getPlanList(payload)
      commit(types.DELETE_PLAN, plan)
    }
  },
  modules: {
  }
})
