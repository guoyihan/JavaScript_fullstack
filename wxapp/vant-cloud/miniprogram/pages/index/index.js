// pages/index/index.js
import Notify from '../../miniprogram_npm/@vant/weapp/notify/notify';
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    newGroupModal: false,
    groupName:''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    showNewGroupModal(){
      this.setData({
        newGroupModal: true
      })
    },
    onGroupNameChange(e) {
      this.setData({
        groupName: e.detail
      })
    },
    closeDialog(){
      this.setData({
        newGroupModal: false
      })
    },
    createGroup() {
      const self = this
      if(this.data.groupName === '') {
        Notify({
          message: '给爷起个名字,爬',
          duration: 1500,
          selector: '#notify-selector',
          background:'#dc3545'
        })
        self.selectComponent("#new-group-modal").stopLoading() //取到一个id叫new-group-modal的组件
      }
      // 调用云函数
      wx.cloud.callFunction({
        name: "createGroup",
        data: {
          groupName: self.data.groupName
        },
        success(res) {
          console.log(res)
          self.setData({
            newGroupModal: false,
            groupName:''
          })
          Notify({
            message: '新建成功',
            duration: 1500,
            selector: '#notify-selector',
            background:'#28a745'
          })
          self.selectComponent("#new-group-modal").stopLoading()
          setTimeout(() => {
            wx.switchTab({
              url: '/pages/group/group'
            })
          }, 1500)
        },
        fail(error) {
          console.log(error)  
        }

      })
      
    }
  }
})
