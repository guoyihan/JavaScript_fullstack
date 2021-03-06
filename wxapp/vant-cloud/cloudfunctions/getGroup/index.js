// 云函数入口文件
const cloud = require('wx-server-sdk')
// 匹配环境id
const env = 'guoyihanlearner-82ofh'

cloud.init()
const db = cloud.database({ env })

// 云函数入口函数
exports.main = async (event, context) => {
  const openId = cloud.getWXContext().OPENID
  let groupList = await db.collection('user-groups')
  .where({
    userInfo: openId
  })
  .get()
  let Result = []
  for (let item of groupList.data) {
    const listItem = await db.collection('groups')
      .where({
        _id: item.groupId,
        delete: false
      })
      .get()
    if (listItem.data.length > 0) {
      const userInfo = await db.collection('user').where({
        openId: listItem.data[0].createBy
      }).get()

      listItem.data[0].createBy = userInfo.data[0]
      listItem.data[0].relateUserGroupId = userInfo.data[i]._id
        Result.push(listItem.data[0])
    }
  }
  return Result
}