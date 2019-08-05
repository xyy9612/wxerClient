//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    photoUrl: app.config.photoUrl, // 线上图片
    userInfo: {},
    qianggou:'qianggou',
    
  },

  onLoad: function(options) {
    console.log(options)
    const that = this;
    console.log(app.config.uid_code)

    // 获取微信用户信息
  },

  /**
   * 直播
   */ 
  liveJump: function(e) {
    wx.navigateTo({
      url: "/pages/liverBoadcast/liverBoadcast"
    })
  },
  /**
   * // 跳转直供页面
   */
  supplyJump: function(e) {
    wx.navigateTo({
      url: "/pages/supply/supply"
    })
  },
  /**
   * 抢购页面
   */
  rushJump: function(e) {
    let qianggou = e.currentTarget.dataset.qianggou
    wx.navigateTo({
      url: '/pages/supplyDetails/supplyDetails?qianggou=' + qianggou,
    })
  },


})