<template>
    <ul>
        <FragmentDemo :data="[2,4,734,31,2]" />
    </ul>
</template>

<script>
import FragmentDemo from './fragment.vue'
export default {
    components: {
        FragmentDemo
    }
}
</script>

<style>

</style>
