<template>
  <div>
    <input type="file" name="" @change="handleFileChange">
    <el-button  @click="handleUpload"> 上传 </el-button>
  </div>
</template>

<script>
import { resolve } from 'dns'
import { handleError } from '../../VUE-3.0/vue-next-master/packages/runtime-core/src'

export default {
  data() {
    return {
      container: {
        file: null
      }
    }
  },
  methods: {
    handleFileChange(e) {
      console.log(e)
      const [file] = e.target.files
      if (!file) return
      Object.assign(this.$data, this.$options.data())
      this.container.file = file
    },
    async handleUpload() {

    },
    // 封装一个原生的请求
    request ({ url, method = 'post', data, headers = {}, requestList}) {
      return new Promise(resolve => {
        const xhr =  new XMLHttpRequest()
        xhr.open(method, url)
        Object.keys(headers).forEach(key => {
          xhr.setRequestHeader(key, headers[key])
        })
        xhr.send(data)
        xhr.onload = e => {
          resolve({
            data: e.target.response
          })
        }
      })
    }

  }
}
</script>

<style>

</style>