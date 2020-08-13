// 云函数入口文件
const cloud = require('wx-server-sdk')
// 匹配环境id
const env = 'guoyihanlearner-82ofh'

cloud.init()
const db = cloud.database({ env })

// 云函数入口函数
exports.main = async (event, context) => {
  // console.log(event)
  const userInfo = event.userInfo
  // 连通数据库
  return await db.collection('groups').add({
    data: {
      name: event.groupName,
      createBy: userInfo.openId,
      createTime: new Date(),
      deleted: false,
      updateTime: new Date()
    }
  })
  .then(res => {
    return db.collection('user-groups').add({
      data: {
        groupId: res._id,
        userInfo: userInfo.openId,
        invalid: false
      }
    })
  })
}