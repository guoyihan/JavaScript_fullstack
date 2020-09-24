<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <et-verify-code></et-verify-code>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    EtVerifyCode: "et-verify-code"
  }
}
</script>

<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>
