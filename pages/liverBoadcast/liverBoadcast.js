// pages/liverBoadcast/liverBoadcast.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    backUrl: app.config.backUrl,
    videoList:[
      {
        "videoImg":"../../images/img/video1.png",
        "videobutton":"../../images/img/bofang.png",
        "title":"青苹果的家乡,无添加无污染种植",
        "sub":"从种植,浇灌到施肥.生长环境无污染,果肉鲜美."
      },
      {
        "videoImg": "../../images/img/video2.png",
        "videobutton":"../../images/img/bofang.png",
        "title": "草莓的家乡,无添加无污染种植",
        "sub": "从种植,浇灌到施肥.生长环境无污染,果肉鲜美."
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const that = this
    // 显示loading
    app.showLoading('加载中...');
    // 请求
    wx.request({
      url: app.config.backUrl + 'apiIndex/live',
      data: {
        page:1
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      method: 'POST',
      success: res => {
        console.log(res.data.data)
        wx.hideLoading();
        // 提示
        wx.showToast({
          title: res.data.masg,
          mask: true
        });
        that.setData({
          videoList: res.data.data
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
   * 跳转详情
   */
  getLiveDetails:function(e){
    const id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: '/pages/liveDetails/liveDetails?id=' + id 
    })
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