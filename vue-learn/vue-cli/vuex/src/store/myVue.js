// Vuex本质上是对象
// Vuex对象有两个属性，一个是install方法，一个是Store这个类
// install方法的作用是将store这个实例挂载到所有的组件上
// Store这个类拥有commit，dispatch这些方法，
//Store类里面将传入的state包装成data，作为new Vue的参数

class Store {
    constructor(options) {
      this.state = options.state || {}
    }
  }
  
  
  let install = function(Vue) {
    Vue.mixin({
      beforeCreate() {
        if (this.$options && this.$options.store) { // 如果是根组件
          this.$store = this.$options.store
        } else { // 如果是子组件
          this.$store = this.$parent && this.$parent.$store
        }
      }
    })
  }
  
  let Vuex = {
    Store,
    install
  }
  export default Vuex