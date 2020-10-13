<template>
  <a-layout id="components-layout-demo-top" class="layout">
    <a-layout-header>
      <div class="logo" />
      <a-menu
        theme="dark"
        mode="horizontal"
        v-model:selectedKeys="selectedKeys"
        :style="{ lineHeight: '64px' }"
      >
        <a-menu-item key="/">
            <router-link to="/">首页</router-link>
        </a-menu-item>
        <a-menu-item key="/plan">
            <router-link to="/plan">计划</router-link>
        </a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout-content style="padding: 0 50px">
      <div :style="{ background: '#fff', padding: '24px', minHeight: '280px' }">
        <router-view></router-view>
      </div>
    </a-layout-content>
    <a-layout-footer style="text-align: center">
      {{count}}
    </a-layout-footer>
  </a-layout>
</template>
<script>
import { reactive, toRefs, watch, computed} from 'vue'
import { useRoute } from 'vue-router'
export default {
    setup(props, context) { // 入口函数, 默认只执行一次, 里面没有this 拿不到vue实例
        const route = useRoute()
        const state = reactive({
            count: 0
        })
        const selectedKeys = computed(() => {
            return [route.path]
        })
         
        watch(() => route.path, (newVal) => {
            state.selectedKeys = [newVal]
        }, { immediate : true})
        return {
            // selectedKeys: state.selectedKeys
            // count: state.count
            ...toRefs(state),
            selectedKeys

        }
    }
  
};
</script>
<style>
#components-layout-demo-top .logo {
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 24px 16px 0;
  float: left;
}
</style>