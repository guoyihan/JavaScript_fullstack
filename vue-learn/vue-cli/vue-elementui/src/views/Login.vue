<template>
  <div class="login">
      <h2>旅梦后台管理系统</h2>
      <div class="login-wrapper">
          <p class="input">
            <el-input v-model="user" placeholder="请输入账号"></el-input>  
          </p>
          <p class="input">
            <el-input v-model="password" placeholder="请输入密码"></el-input>  
          </p>
          <p class="btn">
            <el-button @click="login" type="primary" round>登录</el-button>
          </p>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return{
            user: '',
            password: ''
        }
    },
    methods: {
        login() {
            if (!this.user || !this.password) {
                this.$message.error('账号或密码不能为空');
            } else {
                this.$message({
                    message: '登陆成功',
                    type: 'success'
                });
                this.$router.push({ name: 'Home', params: {name: this.user}})
            }
        }
    }
    
}
</script>

<style scoped>
.login{
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: rgb(0, 184, 230);
}
.login-wrapper{
    margin-top: 30px;
    width: 250px;
}
.input{
    margin-bottom: 20px;
}
.btn button{
    width: 100%;
}
</style>