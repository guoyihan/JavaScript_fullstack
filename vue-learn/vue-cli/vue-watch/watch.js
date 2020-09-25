// 能独立监听某个数据的变化
// 提供可执行函数的场所


class watcher {
    constructor (opts) {
        this.$data = this.getBaseType(opts.data) === 'object' ? opts.data : {}
        this.$watch = this.getBaseType(opts.data) === 'object' ? opts.data : {}
        for(let key in opts.data) {
            this.setData(key)
        }
    }

    getBaseType(target) {
        const typeStr = Object.prototype.toString.call(target)
        typeStr.slice(8, -1)

    }
    setData(_key) {
        Object.defineProperty(this, _key, {
            get: function () {
                return this.$data[_key]
            },
            set: function(val) {
                const oldval = this.$data[_key]
                if (oldval == val) return val
                this.$data[_key] = val
                this.$watch[_key] && this.getBaseType(this.$watch[_key]) === 'Function' && (
                    this.$watch[_key].call(this, val, oldval) 
                )
                return val
            }
        })
    }
    
}




let vm = new watcher({
    data: {
        a: 0,
        b: 'hello',
        // c: {
        //     d: 2
        // }
    },
    watch: {
        a(newVal, oldval) {
            console.log(newVal, oldval)
        }
    }
})


setTimeout