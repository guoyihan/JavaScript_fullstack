<template>
  <div class="vcWrap">
      <input v-for="n in len" :key="'codeInput' + n" :ref="'codeInput'+ n" v-model.trim.number="code[n-1]" @keydown="onKeydown(n)" @keyup="onKeyup(n)">
  </div>
</template>

<script>
export default {
    name: 'EtVerifyCode',
    props: ['length'],
    data() {
        return {
            len: this.length || 4,
            code: new Array(this.len),
            keyCodes: [
                48, 49, 50, 51, 52, 53, 54, 55, 56, 57 , 96, 97, 98, 99, 100, 101, 102, 103, 104, 105
            ]
        }
    },
    methods: {
        onKeydown(n) {
            console.log(n)
        },
        onKeyup(n){
            console.log(n)

        }
    }
}
</script>

<style lang="stylus">
.vcWrap
  input
    width 40px
    height 40px
    line-height: 40px

    -webkit-appearance: none;
    // background-color: #fff;
    // background-image: none;
    // border: 1px solid #dcdfe6;
    background-color: #f7f9fa;
    border: 1px solid #f7f9fa;

    box-sizing: border-box;
    display: inline-block;
    font-size: inherit;
    outline: 0;
    padding: 0 14px;
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    border-radius: 4px;

    margin-right 1em
    &:last-child
      margin-right 0
</style>