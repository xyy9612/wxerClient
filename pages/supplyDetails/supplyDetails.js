// pages/supplyDetails/supplyDetails.js
// var deallist = require('../../data/data.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataList: {},
    currentData: 0,
    recordList: [{
        "id": '1111111111111111'
      },
      {
        "id": '1123354667'
      },
      {
        "id": '3254654767879'
      },
      {
        "id": '6786868687878'
      },
      {
        "id": 'dsdf546676768'
      },
      {
        "id": '345364768'
      },
      {
        "id": 'ffffffffffff'
      },
      {
        "id": '5755555757567'
      }

    ]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    const that = this
    let dataList = options

    that.setData({
      dataList: dataList
    })
  },

  /**
   * 商品详情与成交记录 选项卡
   */
  // 获取当前滑块的index
  bindchange: function(e) {
    const that = this;
    that.setData({
      currentData: e.detail.current
    })
  },
  //点击切换，滑块index赋值
  checkCurrent: function(e) {
    const that = this;

    if (that.data.currentData === e.target.dataset.current) {
      return false;
    } else {

      that.setData({
        currentData: e.target.dataset.current
      })
    }
  },
  /**
   * 回到首页
   */
  jumpHome: function(e){
    console.log('home')
    wx.switchTab({
      url: "/pages/index/index"
    })
  }
})