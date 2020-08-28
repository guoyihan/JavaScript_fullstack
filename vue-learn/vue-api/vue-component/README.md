# 父子组件传值
父组件: Home.vue
子组件: User.vue

在父组件中    <User :userName="name"></User>
在子组件中    props: ['userName'],