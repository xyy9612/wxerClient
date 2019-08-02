// pages/supply/supply.js
let supplyList = require('../../data/data.js').supplyList

Page({

  /**
   * 页面的初始数据
   */
  data: {
    supplyList : {}
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const that = this


    // supplyList = that.data.supplyList
    that.setData({
      supplyList: supplyList
    })
  },

  
  /**
   * 店家跳转详情
   */
  
  jumpDetail: function (e) {
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