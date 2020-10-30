<template>
  <ul>
    <FragmentDemo :data="[2, 4, 734, 31, 2]" />
    <hr />
    <TeleportDemo />
    <hr />
    <!-- <SuspenseDemo /> -->
    <Suspense>
      <template #default> <AsyncComponent :timeout="3000" /> </template>
      <template #fallback> <loading></loading> </template>
    </Suspense>
  </ul>
</template>

<script>
import FragmentDemo from "./fragment.vue";
import TeleportDemo from "./teleport.vue";
import AsyncComponent from "./suspense.vue";
import loading from "./loading.vue";
export default {
  components: {
    FragmentDemo,
    TeleportDemo,
    AsyncComponent,
    loading
  },
};
</script>

<style>
</style>
