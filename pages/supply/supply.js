// pages/supply/supply.js

const request = require('../../utils/request.js')
const util = require('../../utils/util.js')
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pictureUrl: app.config.pictureUrl, // 图片地址
    supplyList : {},
    page: 1,
    userInfo: {},
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const that = this
    let currnetPage = that.data.page;  // 当前第几页
    const param = {
      page: currnetPage,
      uid: app.config.uid_code,
    }
    // 用户信息

    // 显示loading
    app.showLoading('加载中...');

    // 请求
    wx.request({
      url: app.config.backUrl + 'apiIndex/direct',
      data: param,
      header: {
        'content-type': 'application/json' // 默认值
      },
      method: 'POST',
      
      // data: param,
      success: function(res,data) {
        const datalist = res.data.data
        that.setData({
          supplyList: datalist
        })
        wx.hideLoading()
      },
      fail: function (err) {
        wx.hideLoading()
      }
    })
  },

  
  /**
   * 店家跳转详情
   */
  
  jumpDetail: function (e) {
    const that = this
    const id = e.currentTarget.dataset.id
    const img = e.currentTarget.dataset.img
    const title = e.currentTarget.dataset.title
    const price = e.currentTarget.dataset.price
    const subtitle = e.currentTarget.dataset.subtitle
    const bigimg = e.currentTarget.dataset.bigimg
    wx.navigateTo({
      url: '/pages/supplyDetails/supplyDetails?id=' + id + '&img=' + img + '&title=' + title + '&price=' + price + '&subtitle=' + subtitle + '&bigimg=' + bigimg
    })
  },

  /**
   * 跳转问卷调查
   */
  jumpQuestion: function(e){
    wx.navigateTo({
      url: '/pages/questionNaire/questionNaire' 
    })
  }


})