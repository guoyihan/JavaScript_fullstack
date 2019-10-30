<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!-- <button @click="goLogin">去登陆</button>               第一种路由跳转-->   
    <router-link to="/login">           <!-- 第二种路由跳转 -->
      <button>去登陆</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    // goLogin () {
    //   this.$router.push({path: '/login'})  //跳转页面  编程式路由跳转
    // }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
