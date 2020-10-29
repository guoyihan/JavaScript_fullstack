<template>
  <h1>{{state.count}} * 2 = {{double}}</h1>
  <h2>{{num}}</h2>
  <button @click="add">累加</button>
</template>

<script>
import { reactive,computed,ref, onMounted } from 'vue'
export default {
  setup() {
    const {state, double} = useCounter()
    const num = ref(2)
    function add() {
      num.value++
      state.count++
    }
    
    return {
      state, 
      add,
      double,
      num
    }
  }
}

function useCounter(count, n) {
  const state = reactive({
    count: 1
  })
  const double = computed(() => state.count * 2) 
  return {state, double}
}
</script>
