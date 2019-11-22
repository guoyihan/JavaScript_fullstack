import * as types from '../types'
// 将'../types'里的所有export 都引入


const state = {
    showSidebar: false,
    searchHistory: ['123', '1222']
}

const getters = {
    showSidebar: state => state.showSidebar,
    searchHistory: state => state.searchHistory
}

const mutations = {
    [types.COM_SHOW_SIDE_BAR](state, status) {
        state.showSidebar = status
    },
    [types.COM_SAVE_SEARCH_HISTORY](state, status) {

        state.searchHistory = status
    }
}

const actions = {
    setShowSidebar ({commit}, status) {
        commit(types.COM_SHOW_SIDE_BAR, status)
    },
    saveSearchHistory ({commit, state}, query) {
        let searchHistory = [query, ...state.searchHistory.slice()]
        searchHistory = [...new Set(searchHistory)]
        commit(types.COM_SAVE_SEARCH_HISTORY, searchHistory)
    }
}
export default({
    state ,  
    getters,
    mutations,
    actions
})