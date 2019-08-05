//app.js
App({

  config: {
    backUrl: 'http://wanxiaoer.beaconway.cn/',
    pictureUrl: 'http://192.168.1.177/',// 图片地址
    photoUrl:'http://192.168.1.177/static/upload/img/', //线上图片
    // 暂时写死
    uid_code: '033IBWi42jBSfO0E2Yj42RjTi42IBWiL'
    // uid_code: ''
  },
  globalData:{
    
  },
   
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
        
      }
    })
  },
  /**
     * 检查用户guid和token、code是否存在,否则跳到登陆页
     */
  checkLoginStatus: function () {
    const guid = wx.getStorageSync('guid') ? wx.getStorageSync('guid') : '';
    const token = wx.getStorageSync('token') ? wx.getStorageSync('guid') : '';
    const code = wx.getStorageSync('code') ? wx.getStorageSync('guid') : '';
    const ip = wx.getStorageSync('ip') ? wx.getStorageSync('ip') : '';

    if (guid == '' || token == '' || code == '' || guid.length != 32 || token.length != 32 || ip != '售后小程序') {
      this.showModal('系统检测到不是本小程序信息,请重新登陆');
      wx.clearStorage()
      setTimeout(function () {
        wx.reLaunch({
          url: '../login/login'
        });
      }, 1500);
    }

    return true;
  },
  /**
 * 字段的验证
 */
  validate: function (value, type, pattern) {
    // 非空
    if (type === 'required') {
      return !!value;
    }

    // 手机号
    if (type === 'phone') {
      return /^1\d{10}$/.test(value);
    }

    // 邮箱
    if (type === 'email') {
      return /^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/.test(value);
    }

    // 手机号/电话
    if (type === 'tel') {
      return /^\d{1}[\ \-\d]{2,}$/.test(value);
    }

    // 数字
    if (type === 'number') {
      return /^\d+$/.test(value);
    }

    // 浮点数
    if (type === 'float') {
      return /^[\d\.]*\d+$/.test(value);
    }

    // 身份证号
    if (type === 'IDcard') {
      return /(^[1-9]{1}\d{14}$)|(^[1-9]{1}\d{17}$)/.test(value);
    }

    // IP
    if (type === 'IP') {
      return /^[1-9]{1,3}\.\d{1,3}\.\d{1,3}\.[1-9]{1,3}$/.test(value);
    }

    // 正则
    if (type === 'regex') {
      return pattern.test(value);
    }

    // emoji
    if (type === 'emoji') {
      return value.match(/\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F]/g);
    }
  },

  /**
 * loading加载
 */
  showLoading: function (text = '数据加载中...') {
    wx.showLoading({
      title: text
    });
  },
  /**
   * 提示消息
   */
  showModal: function (content) {
    wx.showModal({
      title: '提示消息',
      content: content,
      showCancel: false
    });
  },

  /**
 * 打印fail日志
 */
  failLog: function (msg) {
    console.log('[fail]:' + msg);
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