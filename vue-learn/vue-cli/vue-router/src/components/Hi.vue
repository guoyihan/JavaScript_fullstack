<template>
  <div class="hello">
      <h1>{{msg}}</h1>
      <router-link :to="{name: 'hi1', params:{name: '乐乐'}}">hi一</router-link>
      <span style="width:100px; display:inline-block"></span>
      <router-link to="/hi/hi2">hi二</router-link>
      <span style="width:100px; display:inline-block"></span>
      <router-link to="/abc">404</router-link>
      <div>{{$route.params.name}}</div>
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
    },
    created() {
        console.log(this.$route.query)
        // console.log(this.$route.params)
    },
    beforeRouteEnter: (to, from,next) => {
        console.log('准备进入目标')
        next()
    },
    beforeRouteLeave: (to, from,next) => {
        console.log('准备离开目标')
        next()
    }
}
</script>

<style>

</style>