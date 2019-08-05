// pages/myHome/myHome.js
const app = getApp()
let funList = require("../../data/data.js").my_entrance
Page({

  /**
   * 页面的初始数据
   */
  data: {
    funList:[], // 功能入口
    rightImg:'../../images/img/right.png',
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  onLoad: function () {
    const that = this
    // 获取用户信息
    let userInfo = app.globalData.userInfo;
    that.setData({
      userInfo: userInfo
    });
    // 检查登录状态
    // app.checkLoginStatus()
    //
    // const list = list.shoppingData
    // const that = this
    that.setData({
      funList: funList
    })
  },
  allOrder:function(){
    wx.navigateTo({
      url: "/pages/myOrder/myOrder"
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