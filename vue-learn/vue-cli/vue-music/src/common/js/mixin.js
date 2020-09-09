export const searchMixin = {
    data () {
        return {}
    },
    computed: {

    },
    methods:{
        onQueryChange(e) {
            console.log(e)
            this.query = e.trim()
        }
    }
}