// pages/myOrder/myOrder.js
let orderList = require("../../data/data.js").shoppingData

Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentData: 0,
    orderList: {},
    cancelText: '取消订单',
    paymentText: '立即付款',
    showView: false
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    const that = this
    let cancelText = that.data.cancelText //第一个按钮文字

    for (let i in orderList) {
      if (orderList[i].type === 1) {
        orderList[i].type = '等待交易'
      } else if (orderList[i].type === 2) {
        orderList[i].type = '等待发货'
      } else if (orderList[i].type === 3) {
        orderList[i].type = '交易完成'
      } else if (orderList[i].type === 4) {
        orderList[i].type = '交易关闭'
      } else if (orderList[i].type === 5) {
        orderList[i].type = '删除订单'
      }
    }
    that.setData({
      orderList: orderList,
      cancelText: cancelText
    })
  },
  onShow: function() {},

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
    const orderList = that.data.orderList;
    if (that.data.currentData === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentData: e.target.dataset.current
      })
      console.log(orderList)
      // 

      var _res = []; // 
      orderList.sort();
      for (var i = 0; i < orderList.length;) {
        var count = 0;

        for (var j = i; j < orderList.length; j++) {
          if (orderList[i].type == orderList[j].type) {
            count++;
          }
        }

        _res.push([orderList[i].type, count]);
        i += count;
      }
      //_res 二维数维中保存了 值和值的重复数
      var _newArr = [];
      for (var i = 0; i < _res.length; i++) {
        _newArr.push(_res[i][0] + 'x' + _res[i][1]);
      }

      console.log('------', _newArr)
      console.log('------', that.data.currentData)
    }

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})