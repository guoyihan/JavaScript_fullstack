<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <!-- 组件 -->
    <div class="tab">
      <div class="tab-wrapper">
        <router-link to="/">商品</router-link>
      </div>
      <div class="tab-wrapper">
        <router-link to="/comment">评论</router-link>
      </div>
      <div class="tab-wrapper">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <div class="page">
      <router-view :data="seller" />
    </div>
  </div>
</template>

<script>
import VHeader from '@/components/v-header/v-header.vue';
import { getSeller } from '@/api/index.js';
import qs from 'query-string';

export default {
  data() {
    return {
      seller: {
        id: qs.parse(location.search).id
      },
    };
  },
  methods: {
    _getSeller() {
      getSeller({
        id: this.seller.id
      }).then((seller) => {
        // console.log(seller);
        Object.assign(this.seller, seller)
      });
    },
  },
  created() {
    this._getSeller();
  },
  components: {
    VHeader,
  },
};
</script>

<style lang="stylus" scoped>
@import './common/stylus/variable.styl';
  .tab
    width 100%
    display flex
    height 36px
    line-height 36px

    &-wrapper
      flex 1
      text-align center
      color #666666
      a
        display block
        width 100%
      .router-link-exact-active
        color $color-red
        border-bottom 2px solid $color-red
  .page
    position fixed
    top 174px
    left 0
    right 0
    bottom 0

</style>
