//app.js
App({
  onLaunch: function() {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    // wx.getSetting({
    //   success: res => {
    //     if (res.authSetting['scope.userInfo']) {
    //       // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
    //       wx.getUserInfo({
    //         success: res => {
    //           // 可以将 res 发送给后台解码出 unionId
    //           this.globalData.userInfo = res.userInfo

    //           // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //           // 所以此处加入 callback 以防止这种情况
    //           if (this.userInfoReadyCallback) {
    //             this.userInfoReadyCallback(res)
    //           }
    //         }
    //       })
    //     }
    //   }
    // })
  },

  globalData: {
    // 用户信息
    userInfo: null,
    code: ''
  },

  onLaunch: function() {
    // 获取用户信息
    this.getUserInfo();
  },

  /**
   * 获取登录用户信息
   */
  getUserInfo: function(cb) {
    var that = this
    wx.login({
      success: function() {
        wx.getUserInfo({
          success: function(res) {
            that.globalData.userInfo = res.userInfo
            typeof cb == "function" && cb(that.globalData.userInfo)
          }
        })
      }
    })
  },
  /*
   * 检查用户guid和token、code是否存在, 否则跳到登陆页
   */
  // checkLoginStatus: function() {
  //   const guid = wx.getStorageSync('guid') ? wx.getStorageSync('guid') : '';
  //   const token = wx.getStorageSync('token') ? wx.getStorageSync('guid') : '';
  //   const code = wx.getStorageSync('code') ? wx.getStorageSync('guid') : '';
  //   const ip = wx.getStorageSync('ip') ? wx.getStorageSync('ip') : '';

  //   if (guid == '' || token == '' || code == '' || guid.length != 32 || token.length != 32 || ip != '小程序') {
  //     wx.clearStorage();
  //     wx.showModal({
  //       title: '提示消息',
  //       content: '系统检测到不是本小程序信息，请重新登录',
  //       showCancel: false
  //     });
  //     wx.navigateTo({
  //      url: '/pages/login/login'
  //     })  
  //   }
  //   return true;
  // },
})