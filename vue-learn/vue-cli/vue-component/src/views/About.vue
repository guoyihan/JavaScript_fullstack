<template>
  <div class="about">
      <User :userName="name" @babyChange="updateBaby"></User>
      <Animal :babyName="baby" ></Animal>
  </div>
</template>

<script>
import User from '@/components/User'
import Animal from '@/components/Animal'


export default {
  components: {
    User,
    Animal
  },
  data() {
    return {
      name: 'pipi',
      baby: ''
    }
  },
  methods: {
    updateBaby(baby) {
      this.baby = baby
    }
  }
}
</script>

<style>
.about{
  color: red;
}
</style>