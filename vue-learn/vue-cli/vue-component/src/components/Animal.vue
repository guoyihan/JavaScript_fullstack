<template>
  <div class="animal">
      <p>宠物: {{babyName}}</p>
  </div>
</template>

<script>
export default {
    props: {
        babyName: {
            type: String,
            default: '小白'
        }
    },
    data() {
        return {
            baby: '小白'
        }
    }
}
</script>

<style>

</style>