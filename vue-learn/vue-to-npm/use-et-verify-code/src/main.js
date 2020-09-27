import Vue from 'vue'
import App from './App.vue'
import GyhVerifyCode from 'gyh-verify-code'


Vue.use(GyhVerifyCode)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
