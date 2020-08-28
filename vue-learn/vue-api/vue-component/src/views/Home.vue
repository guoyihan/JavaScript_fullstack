<template>
  <div class="home">
    <User :userName="name"></User>
  </div>
</template>

<script>
// @ is an alias to /src
import User from '@/components/User'

export default {
  name: 'Home',
  components: {
    User
  },
  data() {
    return {
      name: "聪哥"
    }
  }
}
</script>
