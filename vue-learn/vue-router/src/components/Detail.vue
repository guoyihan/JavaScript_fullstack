<template>

  <div class="mine">
      这是详情页面
      <p>{{$route.params.id}}</p>
  </div>
</template>

<script>
export default {
    created(){
        console.log(this.$route.params.ids)
    }
}
</script>