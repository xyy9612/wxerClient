const app = getApp();
// const request = require('../../utils/request.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // user_code: app.globalData.uid_code
    // qiniuUrl: app.config.qiniuUrl + '/smallApp/'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    const that = this
    // 获取用户信息
    let userInfo = app.globalData.userInfo;
    that.setData({
      userInfo: userInfo
    });
  },

  /**
   * 登录操作
   */
  login: function(e) {
    const that = this
    const user_code = app.config.uid_code
    wx.login({
      success: function(res) {
        
        app.config.uid_code = res.code

        console.log(111111, app.config.uid_code)

        // 获取表单值
        const req = e.detail.value;

        // 检测用户名是否填写
        if (!req.mobile) {
          app.showModal('手机号未填写');
          return;
        }
        if (app.validate(req.mobile, 'emoji')) {
          app.showModal('手机号不能包含特殊字符');
          return;
        }
        // 检测密码是否填写
        if (!req.password) {
          app.showModal('密码未填写');
          return;
        }
        if (app.validate(req.password, 'emoji')) {
          app.showModal('密码不能包含特殊字符');
          return;
        }
        // 显示loading
        app.showLoading('加载中...');
        // 请求
        wx.request({
          url: app.config.backUrl + 'apiLogin/login',
          data: {
            mobile: req.mobile,
            password: req.password
          },
          header: {
            'content-type': 'application/json' // 默认值
          },
          method: 'POST',
          success: res => {
            console.log(res)
            wx.hideLoading();
            // 提示
            wx.showToast({
              title: res.data.masg,
              mask: true
            });
            // 跳转到首页
            setTimeout(function() {
              wx.switchTab({
                url: '../index/index'
              });
              wx.navigateTo({
                url: '../index/index'
              })
            }, 2000);
          },
          error: function(res) {
            app.errorLog(res);
            wx.hideLoading();
            app.showModal(res);
          },
          fail: function(res) {
            console.log(res)
            app.failLog(res);
            wx.hideLoading();
            app.showModal('网络错误，请稍候再试');
          }
        });
      },
      fail: function() {
        callback(false)
      }
    })


  },

})