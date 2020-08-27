<template>
  <div class="hi">
    <p>我是hi2页面</p>
    <button @click="goBack">返回上一个页面</button>
  </div>
  
</template>

<script>
export default {
    data() {
      return{
        
      }
    },
    methods:{
      goBack() {
        // 编程式导航
        this.$router.push('/hi') 
        // 编程式导航  +   传参
        this.$router.push({ path: '/hi', query: {name: 'lll'}}) 
        // this.$router.push({ name: 'hi', params: {name: 'lll'}}) 
      }
    }
}
</script>

<style>

</style>