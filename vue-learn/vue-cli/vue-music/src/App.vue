<template>
  <div id="app">
    <v-header>
      <i class="iconfont" slot="left-icon" >&#xe700;</i>
      <span slot="content">My Music</span>
      <i class="iconfont" slot="right-icon" >&#xe617;</i>
    </v-header>
    <v-tab></v-tab>

    <keep-alive>
      <router-view/>
    </keep-alive>

    <v-play></v-play>
    <!-- menu -->
    <v-sidebar></v-sidebar>

  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Sidebar from '@/components/Sidebar.vue'
import Tab from '@/components/Tab.vue'
import Play from '@/components/Play.vue'
export default {
  components: {
    'v-header': Header,
    'v-sidebar': Sidebar,
    'v-tab': Tab,
    'v-play': Play
  }
}
</script>

<style lang="stylus">
@font-face {
  font-family: 'iconfont';  /* project id 2052918 */
  src: url('//at.alicdn.com/t/font_2052918_ufnbjxbjval.eot');
  src: url('//at.alicdn.com/t/font_2052918_ufnbjxbjval.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_2052918_ufnbjxbjval.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_2052918_ufnbjxbjval.woff') format('woff'),
  url('//at.alicdn.com/t/font_2052918_ufnbjxbjval.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_2052918_ufnbjxbjval.svg#iconfont') format('svg');
}
.iconfont{
  font-family:"iconfont" !important;
  font-size:16px;font-style:normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
html,
body {
  line-height: 1;
  font-family: PingFang SC, STHeitiSC-Light, Helvetica-Light, arial, sans-serif;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  // background: rgba(8, 5, 58, 0.9);
  background: rgba(0, 102, 204, 0.9);
  color: #fff;
}
</style>
