<template>
  <div class="homechild">
      <p>首页的子组件</p>
      <hr />
      <h3>{{count}} {{abc}}</h3>
      <div class="btn">
          <button @click="addAction">+</button>
          <button @click="reduce">-</button>
      </div>
  </div>
</template>

<script>
import store from '@/vuex/store.js'
import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'
export default {
    data() {
        return {
            msg: 'Hello world'
        }
    },
    store,
    computed: {
        count() {
            return this.$store.state.count
        }
    },
    // computed: mapState({
    //     count: state => state.count
    // }),
    // computed: mapState(['count']),
    // computed: {
    //     ...mapState(['count']),
    //     ...mapGetters(['abc'])
    // },


    // methods: {
    //     add() {
    //         this.$store.commit('add', 10)
    //     },
    //     reduce() {
        
    //         this.$store.commit('reduce')
    //     }
    // }
    methods: mapActions([
        'addAction'
    ])
    // ES6的写法, babel
    // methods: {
    //     ...mapMutations(['add', 'reduce']),
    //     ...mapActions(['addAction'])
    // }
}
</script>

<style>

</style>