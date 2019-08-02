// pages/supplyDetails/supplyDetails.js
var recordList = require('../../data/data.js').recordList
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataList: {}, // 图片详情接收的值
    currentData: 0,

    circular: true,
    indicatorDots: false,
    autoplay: true,
    interval: 4000,
    duration: 1000,
    vertical: true,
    text: [{
      text: '121510515120'
    }, {
        text: '121510515120'
    }],

    recordList: {} // 成交记录

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    const that = this
    let dataList = options
    if (dataList.subtitle && dataList.bigimg == 'undefined' || ''){
      dataList.subtitle = '暂无副标题'
      dataList.bigimg = ''
    }
    // for (let i = 0; i < options.length;i++){
    //   console.log(options[i].subtitle)
    // }
    that.setData({
      dataList: dataList,
      recordList: recordList
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