import * as type from '../types.js'
import { findIndex }  from '../../common/js/util'



const state = {
    playList: [],
    currentIndex: -1,
    playing: false,
    fullScreen: false
}

const getters = {
    currentSong: state => state.playList[state.currentIndex] || {}
}

const mutations = {
    [type.SET_PLAYLIST](state, playlist) {
        state.playList = playlist
    },
    [type.SET_CURRENT_INDEX](state, index) {
        state.currentIndex = index
    },
    [type.SET_FULL_SCREEN](state, status) {
        state.fullScreen = status
    },
    [type.SET_PLAYING] (state, status) {
        state.playing = status
    }
}

const actions = {
    selectPlaySong({commit, state} ,song) {
        let playlist = state.playList.slice()
        let currentIindex = state.currentIndex
        // 查找当前播放列表是否已经存在该歌曲
        let fpIndex = findIndex(playlist, song)
        if (fpIndex > -1) {
            currentIindex = fpIndex
        } else {
            playlist = [...playlist, song]
            currentIindex = playlist.length - 1
        }
        commit(type.SET_PLAYLIST, playlist)
        commit(type.SET_CURRENT_INDEX, currentIindex)
        commit(type.SET_FULL_SCREEN, true)
        commit(type.SET_PLAYING, true)
    }
}

export default { 
    state,
    getters,
    mutations,
    actions
}



    