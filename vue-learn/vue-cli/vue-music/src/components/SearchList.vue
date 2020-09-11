<template>
  <div class="search-list" v-show="searches.length">
      <transition-group name="list" tag="ul">
          <li class="search-item" v-for="(item, index) in searches" :key="index">
              <span class="text">{{item}}</span>
              <span class="icon-box" @click.stop="deleteOne(index)">
                  <i class="iconfont">&#xe633;</i>
              </span>
          </li>
      </transition-group>
  </div>
</template>

<script>
export default {
    props: {
        searches: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            
        }
    },
    methods: {
        deleteOne(index) {
            this.$emit('delete', index)
        }
    }
}
</script>
<style scoped lang="stylus">

.search-list 
  .search-item 
    display flex
    align-items center
    height 40px
    overflow hidden

    &.list-enter-active, &.list-leave-active 
      transition all 0.1s
    

    &.list-enter, &.list-leave-to 
      height 0
    

    .text 
      flex 1
      color hsla(0,0%,100%,.5)
    

    .icon-box 
      .icon 
        font-size 18px
        color hsla(0,0%,100%,.3)
</style>
