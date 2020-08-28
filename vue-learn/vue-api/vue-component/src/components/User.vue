<template>
  <div class="user">
      <p>{{userName}}</p>
  </div>
</template>

<script>
export default {
    props: ['userName'],
    data() {
        return {
            name: 'pipi'
        }
    }
}
</script>

<style>

</style>