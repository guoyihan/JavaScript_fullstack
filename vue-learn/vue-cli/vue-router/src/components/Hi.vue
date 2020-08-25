<template>
  <div class="hello">
      <h1>{{msg}}</h1>
      <router-link :to="{name: 'hi1', params:{name: '乐乐'}}">hi一</router-link>
      <span style="width:100px; display:inline-block"></span>
      <router-link to="/hi/hi2">hi二</router-link>

      <router-view></router-view>
  </div>
</template>

<script>
export default {
    name: 'Hi',
    data () {
        return {
            msg: 'HI, I am gyh'
        }
    }
}
</script>

<style>

</style>