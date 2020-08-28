<template>
  <div class="user">
      <p>{{userName}}</p>
      <!-- <button @click="handle">按钮</button> -->
      <button @click="changeBaby">养新的宠物</button>

  </div>
</template>

<script>
export default {
    props: ['userName'],
    data() {
        return {
            name: 'pipi',
            title: '我是子组件里的title',
            baby: '小黑'
        }
    },
    methods: {
        handle() {
            console.log('ok')
            this.$emit('titleChange', this.title)  //第一个式发射出去的名字, 第二参数是需要被发射出去的值
        },
        changeBaby() {
            this.$emit('babyChange', this.baby)
        }
    }
}
</script>

<style>

</style>