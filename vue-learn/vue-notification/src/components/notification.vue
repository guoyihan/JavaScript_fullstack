<template>
  <div class="main" v-show="visiable">
      <div class="container">
            <h2>{{ title }}</h2>
            <p>{{ content }}</p>
      </div>
      
  </div>    
</template>

<script>
export default {
    props: {
        title: String,
        content: String,
        visiable: Boolean
    }
}
</script>

<style>
.main{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.4;
    background-color: #eee;
    opacity: .4;
}
.container {
    position: absolute;
    right: 20px;
    top: 20px;
    width: 100px;
    height: 100px;
    border: 1px solid #000;
    box-shadow: 2px 0 2px #000
    
}
h2, p {
    color: #000;
}
</style>