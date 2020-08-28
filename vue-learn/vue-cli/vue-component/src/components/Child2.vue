<template>
  <div class="child">
      child2 {{msg}}
  </div>
</template>

<script>
import bus from '@/utils/bus.js'

export default {
    created() {
        bus.$on('info', (val) => { 
            this.msg = val
        })
    },
    data () {
        return {
            msg: ''
        }
    }
}
</script>

<style>

</style>