Page({
  data: {
    latitude:39.902383,
    longitude:116.438502,
    scale: 18,
    markers:[]
  },
  onLoad (){
    // 微信赋予小程序可以调用的API
    wx.showLoading({
      title: '获取坐标中'
    });
    // 手机的GPS
    wx.getLocation({
      type: 'gcj02',
      // 回调
      success: (res) => {
        // console.log(res)
        let { longitude, latitude } = res;
        this.tocreateMarkers(longitude, latitude)
        // console.log(longitude, latitude);
        this.setData({
          longitude,
          latitude
        }, () => {
          wx.hideLoading();    
        })
      }
    })
      
  },
  onReady(){
    // 地图上下文环境
    this.mapCtx = wx.createMapContext('myMap');
      
  },
  toVisit(e){
    console.log(e);
  },
  toScan() {
    return wx.scanCode({
      success: (res) =>{
        console.log(res);
        wx.showModal({
          title: 'scan',
          content: JSON.stringify(res)
        })
      }
    })
  },
  toUser (){},
  toMsg (){},
  toReset (){
    // 当你使用地图来来去去的时候，回到起点
    console.log('---');
    this.mapCtx.moveToLocation();
    this.setData({
      scale: 18
    })
  },
  tocreateMarkers (longitude, latitude) {
    let markers = [
      {
        "id": 1,
        "iconPath": "/images/map-bicycle.png",
        "latitude": latitude,
        "longitude": longitude,
        "width": 52.5,
        "height": 30,
        "callout": {}
      }
    ]
    this.setData({
      markers
    });
  }
})