<template>
    <div class="count">
        {{count}}
        <button @click="addAction(10)">+</button>
        <!-- <button @click="addAction">+</button> -->
        <button @click="reduceAction">-</button>
        {{getCount}}
    </div>
</template>

<script>
import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'
export default {
    data() {
        return {
            // myCount: null
        }
    },
    // mounted() {
    //     this.myCount = this.$store.state.count
    // },
    // computed: {
        // myCount () {
        //     return this.$store.state.count
        // }
    // },
    // computed: mapState({
    //     mycount: state => state.count
    //     // myCount (state) {
    //     //     return state.count
    //     // }
    // }),
    // computed: mapState(['count']),
    computed: {                        //最常用的方法
        ...mapState([
            'count'
        ]),
        ...mapGetters([
            'getCount'
        ])
        // getCount () {
        //     return this.$store.getters.getCount
        // }
    },
    methods: {
        // test() {
        //     this.myCount ++
        // }
        ...mapMutations([
            'add',
            'reduce'
        ]),
        ...mapActions([
            'addAction',
            'reduceAction'
        ])
    }
}
</script>

<style>

</style>