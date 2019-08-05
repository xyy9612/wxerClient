// pages/liveDetails/LiveDetails.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nodes:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const that = this
    console.log(options.id)
    // 显示loading
    app.showLoading('加载中...');
    // 请求
    wx.request({
      url: app.config.backUrl + 'apiLive/details',
      data: {
        id: options.id
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      method: 'POST',
      success: res => {
        let text = res.data.data.text 
        console.log(res.data.data.text)
        wx.hideLoading();
        // 提示
        wx.showToast({
          title: res.data.masg,
          mask: true
        });
        that.setData({
          nodes: text
        })
      },
      error: function (res) {
        app.errorLog(res);
        wx.hideLoading();
        app.showModal(res);
      },
      fail: function (res) {
        console.log(res)
        app.failLog(res);
        wx.hideLoading();
        app.showModal('网络错误，请稍候再试');
      }
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})