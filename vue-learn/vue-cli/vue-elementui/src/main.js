import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';

Vue.config.productionTip = false

Vue.use(ElementUI);  // 把传入的参数内置到源码中

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
