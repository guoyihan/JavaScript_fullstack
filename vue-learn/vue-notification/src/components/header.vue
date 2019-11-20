<template>
  <div class="header">
      header
      <Notification :visiable="visiable"
      title="通知"
      content="放假"
      />
  </div>
</template>

<script>
import Notification from './notification'
export default {
    data() {
        return {
            visiable: true
        }
    },
    mounted() {
        setTimeout(() => {
            this.visiable = false
        }, 4000)
    },
    components: {
        Notification
    }
}
</script>

<style scoped>
.header{
    position: fixed;
    top: 0;
}

</style>