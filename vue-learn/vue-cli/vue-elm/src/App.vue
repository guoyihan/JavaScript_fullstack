<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <!-- 组件 -->
    <router-view/>
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
        console.log(seller);
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

</style>
