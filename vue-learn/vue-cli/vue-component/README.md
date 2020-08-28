父组件: Home.vue
子组件: User.vue
子组件: Animal.vue


# 父向子组件传值
在父组件中    <User :userName="name"></User>
在子组件中    props: ['userName'],


# 子向父组件传值
在子组件中    this.$emit('titleChange', this.title)  第一个式发射出去的名字, 第二参数是需要被发射出去的值
在父组件中    <User  @titleChange="updateTitle"></User>   接受到titleChange ,并重写成新的方法updateTitle


# 兄弟组件传值
新建一个untils下的bus.js. 一个组件$emit 一个$on 两个组件都引入这个bus.js
