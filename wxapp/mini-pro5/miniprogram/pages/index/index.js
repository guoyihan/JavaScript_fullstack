//index.js
const db = wx.cloud.database()
const projects = db.collection('projects')




const app = getApp()

Page({
  data: {
    title: '',
    images: []
  },
  changeTitle(event) {
    console.log(event.detail)
    this.setData({
      title: event.detail
    })
  },
  upload() {
    wx.chooseImage({
      count: 9,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: (res) => {
        // 1.本地地址
        // 2.云端
        // 3.this.data.images []
        const images = []
        let idx = 0
        console.log(res.tempFilePaths)
        const tempFilePaths = res.tempFilePaths
        for (let filePath of tempFilePaths) {
          let tmpFileName = (+ new Date() + Math.floor(Math.random()*1000)).toString() + '.png'
          wx.cloud.uploadFile({
            cloudPath: tmpFileName,
            filePath: filePath,
            file: error => {
              idx++
            },
            success: res => {
              idx++
              images.push(res.fileID)
              if (idx == tempFilePaths.length) {
                console.log('图片上传完毕')
                this.setData({
                  images
                })
              }
            }
          })        
        }
      },
      fail: () => {},
      complete: () => {}
    });
      
  },
  createProject() {
    // promise 异步  存数据  存文件
    // success 回调函数 then  promise  两种都可以
    projects.add({
      data: {
        title: this.data.title,
        images: this.data.images
      }
    })
    .then (res => {
      wx.showToast({
        title: '发布消息成功',
        icon: 'success'
      })
    })
    .catch (err => {
      wx.showToast({
        title: '发布消息失败',
        icon: 'error'
      })
    })

  }

})
