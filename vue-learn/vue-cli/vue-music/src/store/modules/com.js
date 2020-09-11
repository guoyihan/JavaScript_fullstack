
import * as type from '../types.js'



const state = {
    showSidebar: false,
    searchHistory: [

    ],
}

const getters = {
    showSidebar: state => state.showSidebar,
    searchHistory: state => state.searchHistory
}

const mutations = {
    [type.COM_SHOW_SIDE_BAR](state, status) {
        state.showSidebar = status
    },
    [type.COM_DELETE_SEARCH_HISTORY](state, index) {
        state.searchHistory.splice(index, 1)
    },
    [type.COM_CLEAR_SEARCH_HISTORY](state) {
        state.searchHistory = []
    },
    [type.COM_SAVE_SEARCH_BAR](state, payload) {
        state.searchHistory = payload
    }
}

const actions = {
    setShowSidebar({ commit }, status) {
        commit(type.COM_SHOW_SIDE_BAR, status)
    },
    deleteSearchHistory({ commit }, status) {
        commit(type.COM_DELETE_SEARCH_HISTORY, status)
    },
    clearSearchHistory({commit}) {
        commit(type.COM_CLEAR_SEARCH_HISTORY)
    },
    saveSearchBar({ commit, state }, query) {
        let searchHistory = [query, ...state.searchHistory.slice()]
        searchHistory = [...new Set(searchHistory)]
        commit(type.COM_SAVE_SEARCH_BAR, searchHistory)
    }
}

export default { 
    state,
    getters,
    mutations,
    actions
}