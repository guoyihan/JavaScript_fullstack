<template>
  <div class="search">
      <div class="search-box-wrapper">
          <v-searchbox @query="onQueryChange"></v-searchbox>
      </div>
      <!-- 热搜 -->
      <div class="shortcut-wrapper" ref="shortcutWrapper" v-show="!query">
        <v-scroll class="shortcut" ref="shortcut">
          <div>
            <div class="hot-key">
              <h1 class="title">热门搜索</h1>
              <ul>
                <li class="item" v-for="(item, index) in hotKey" :key="index">
                  <span>{{item.first}}</span>
                </li>
              </ul>
            </div>
            <div class="search-history"  v-show="searchHistory.length">
              <h1 class="title">
                <span class="text">搜索历史</span>
                <span class="clear" @click="clearSearchHistory" >
                  <i class="iconfont">&#xe602;</i>
                </span>
              </h1>
              <!-- 搜索历史列表 -->
              <v-searchlist :searches="searchHistory" @delete="deleteSearchHistory"></v-searchlist>
            </div>
          </div>
        </v-scroll>
      </div>
      <!-- 搜索结果列表 -->
      <div class="search-result" ref="searchResult" v-show="query">
        <v-searchresult :query="query" @select="saveSearch"></v-searchresult>
      </div>
  </div>
</template>

<script>
import SearchBox from '@/components/SearchBox'
import SearchList from '@/components/SearchList'
import Scroll from '@/components/Scroll'
import SearchResult from '@/components/SearchResult'
import api from '../api/index'
import { mapGetters, mapActions } from 'vuex'
import { searchMixin } from '@/common/js/mixin'

export default {
    components: {
        'v-searchbox': SearchBox,
        'v-scroll': Scroll,
        'v-searchlist': SearchList,
        'v-searchresult': SearchResult
    },
    mixins: [searchMixin],
    data () {
      return {
        hotKey: []
      }
    },
    created() {
      this._getHotKey()
    },
    computed: {
      ...mapGetters(['searchHistory'])
    },
    methods: {
      // 获取热门搜索
      _getHotKey () {  
        api.HotSearchKey().then((res) => {
          console.log(res)
          this.hotKey = res.result.hots.slice(0,10)
        })
      },
      saveSearch() {
        // 保存历史记录
        this.saveSearchBar(this.query)
      },
      ...mapActions(['deleteSearchHistory', 'clearSearchHistory','saveSearchBar'])
    },
    watch: {
      query(newQuery) {
        if (newQuery) {
          setTimeout(() => {
            this.$refs.shortcut.refresh()
          }, 20)
        }
      }
    }
}
</script>

<style lang="stylus" scoped>
@import "../assets/css/function.styl";
.search 
  overflow hidden
  .search-box-wrapper 
    margin px2rem(40px)
  
  .shortcut-wrapper 
    position fixed
    top px2rem(360px)
    bottom 0
    width 100%
    .shortcut 
      height 100%
      overflow hidden
      .hot-key 
        margin 0 px2rem(40px) px2rem(40px) px2rem(40px)
        .title 
          margin-bottom px2rem(40px)
          font-size 14px
          color hsla(0,0%,100%,.5)
        
        .item 
          display inline-block
          padding px2rem(10px) px2rem(20px)
          margin 0 px2rem(20px) px2rem(20px) 0
          border-radius 6px
          background #2f3054
          font-size 14px
          color hsla(0,0%,100%,.3)
        
      
      .search-history 
        position relative
        margin 0 px2rem(40px)
        .title 
          display flex
          align-items center
          height px2rem(80px)
          font-size 14px
          color hsla(0,0%,100%,.5)
          .text 
            flex 1
          
          .clear 
            // extend-click()
            .icon 
              font-size 18px
              color hsla(0,0%,100%,.3)
            
          
        
      
    
  
  .search-result 
    position fixed
    width 100%
    top px2rem(360px)
    bottom 0
  

</style>