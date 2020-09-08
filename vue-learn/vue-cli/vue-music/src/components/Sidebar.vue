<template>
  <div class="sidebar" :class="showSidebar ? 'showbar' : ''">
    <div class="sidebar-con" :class="showSidebar ? 'showbar' : ''">
      <div class="head">
        <div class="avatar">
          <img
            src="https://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=%E5%A4%B4%E5%83%8F%20%E5%8D%A1%E8%8E%8E&step_word=&hs=0&pn=2&spn=0&di=24530&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=2&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=-1&cs=3259687939%2C3731580011&os=602112726%2C1029617888&simid=4264365850%2C837555932&adpicid=0&lpn=0&ln=764&fr=&fmq=1599553822436_R&fm=result&ic=0&s=undefined&hd=undefined&latest=undefined&copyright=undefined&se=&sme=&tab=0&width=&height=&face=undefined&ist=&jit=&cg=&bdtype=0&oriquery=&objurl=http%3A%2F%2Fi.gongxiao8.com%2Fuploads%2Fi_2_3259687939x3731580011_26.jpg&fromurl=ippr_z2C%24qAzdH3FAzdH3Fooo_z%26e3B25g2xtw5b_z%26e3Bv54AzdH3F4hAzdH3FzgquzgAzdH3F&gsm=3&rpstart=0&rpnum=0&islist=&querylist=&force=undefined"
          />
        </div>
        <div class="name">蜗牛</div>
      </div>
      <div class="menu">
        <ul>
          <li @click="showToast">
            <router-link to="">
              <i class="iconfont">&#xe617;</i>
              <span>个人中心</span>
            </router-link>
          </li>
          <li>
            <router-link to="/user">
              <i class="iconfont">&#xe617;</i>
              <span>个人中心</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="sidebar_mask" @click="setShowSidebar(false)" v-show="showSidebar"></div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data() {
    return {
    }
  },
  methods: {
    ...mapActions(['setShowSidebar']),
    showToast() {
      this.$toast('该功能暂未开放')
    }
  },
  computed: {
    ...mapGetters(['showSidebar'])
  }
};
</script>
<style lang="stylus" scoped>
@import "../assets/css/function"
.sidebar 
  color #e8e8e8
  .sidebar-con 
    background rgb(0, 102, 204)
    position absolute
    top 0
    left px2rem(-400px)
    transform translateZ(0)
    opacity 0
    width px2rem(350px)
    z-index 1002
    height 100%
    overflow auto
    transition all 0.3s ease

    &.showbar 
      transform translateX(px2rem(400px))
      opacity 1
    
    .head 
      text-align center
      .avatar 
        width px2rem(90px)
        height px2rem(90px)
        background #f1f1f1
        border-radius 50%
        margin px2rem(60px) auto px2rem(15px)
        img 
          width 100%
      .name 
        font-size px2rem(32px)
      
    
    .menu 
      margin-top px2rem(30px)
      ul 
        li 
          height px2rem(90px)
          line-height px2rem(90px)
          a 
            display block
            padding-left px2rem(60px)
            .icon 
              font-size px2rem(36px)
              vertical-align middle
            span 
              vertical-align middle
              font-size px2rem(24px)
              padding-left px2rem(20px)
              color #fff
          &hover 
            .icon,
            span 
              color #902444
  .sidebar_mask 
    position fixed
    width 100%
    margin 0 auto
    top 0
    left 0
    bottom 0
    right 0
    z-index 1001
    background rgba(0, 0, 0, 0.4)
</style>
