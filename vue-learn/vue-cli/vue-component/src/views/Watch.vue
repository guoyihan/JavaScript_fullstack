<template>
  <div class="watch">
      <span>{{temp}}度</span>----
      <span>{{suggest}}</span>
      <br>
      <button @click="add">ADD</button>
      <button @click="reduce">REDUCE</button>
  </div>
</template>

<script>
// mixins
let addLog = {
    created () {
        console.log('我是mixins里的created')
    },
    updated: function () {
        console.log('数据发生了变化,此时温度为' + this.temp)
    }
}

let ext = {
    created () {
        console.log('我是被扩展出来的created')
    },
    methods: {
        add() {
            console.log('我是被扩展出来的add')
        }
    }
}

//extend> mixin> 原生
export default {
    data() {
        return {
            temp: 27,
            suggest: '穿短袖'
        }
    },
    created () {
        console.log('我是原生的created')
    },
    mixins: [addLog],  //把外部的代码扩充进来
    extends: ext,
    methods: {
        add() {
            this.temp += 5

        },
        reduce() {
            this.temp -= 5
        }
    },
    watch: {
        temp: function(newVal, oldVal) {
            console.log(newVal, oldVal)
            if (newVal >= 15) {
                this.suggest = '穿短袖'
            } else if ( newVal < 15 && newVal > 0) {
                this.suggest = '穿夹克'
            } else if ( newVal <= 0) {
                this.suggest = '穿羽绒服'
            }
        }

    }
}
</script>

<style>

</style>