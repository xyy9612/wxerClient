// pages/shopDetails/shopDetails.js
// pages/shopCar/shopCar.js
// 默认请求第一页
var numbers = 1;
var bool = true;
let list = require("../../data/data.js").shoppingData
const app = getApp();

Page({
  data: {
    show_edit: "block",
    edit_name: "编辑",
    edit_show: "none",
    list: [], // 购物车列表
    // hasList: false,          // 列表是否有数据
    // 默认展示数据
    hasList: true,
    //商品
    shopNum: '',
    shopIdArr: [],
    shopid: '',
    // 金额
    totalPrice: 0, // 总价，初始为0
    // 全选状态
    selectAllStatus: false, // 全选状态，默认全选
  },
  onLoad: function () {
    // that.getShopCarList()

    //获取列表
    const that = this
    // 显示loading
    app.showLoading('加载中...');
    // 请求
    wx.request({
      url: app.config.backUrl + 'apiOrder/details',
      data: {
        ordernum: '',
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      method: 'POST',
      success: res => {
        wx.hideLoading();
        // that.setData({
        //   list: res.data.data,
        // })
      },
      error: function (res) {
        app.errorLog(res);
        wx.hideLoading();
        app.showModal(res);
      },
      fail: function (res) {
        app.failLog(res);
        wx.hideLoading();
        app.showModal('网络错误，请稍候再试');
      }
    });
  },
  onShow() {
    wx.showToast({
      title: '加载中',
      icon: "loading",
      duration: 500
    })

    // 价格方法
    this.count_price();
  },


  /**
   * 获取购物车列表
   */
  getShopCarList: function () {

  },
 
  // 提交订单
  btn_submit_order: function () {
    var that = this;
    
      // that.data.shopNum.push(String(e.currentTarget.dataset.shopNum))
      // console.log('-----', that.data.shopIdArr)
    
    console.log(that.data.totalPrice);

    // 调起支付
    // wx.requestPayment(
    //   {
    //     'timeStamp': '',
    //     'nonceStr': '',
    //     'package': '',
    //     'signType': 'MD5',
    //     'paySign': '',
    //     'success': function (res) { },
    //     'fail': function (res) { },
    //     'complete': function (res) { }
    //   })
    // wx.showModal({
    //   title: '提示',
    //   content: '合计金额-' + that.data.totalPrice + "暂未开发",
    // })
  },


  /**
   * 计算总价
   */
  count_price() {
    const that = this
    // 获取商品列表数据
    let list = that.data.list;
    // 声明一个变量接收数组列表price
    let total = 0;
    // 循环列表得到每个数据
    for (let i = 0; i < list.length; i++) {
      // 判断选中计算价格
      if (list[i].selected) {
        // 所有价格加起来 count_money
        total += list[i].num * list[i].price;
      }
    }
    // 最后赋值到data中渲染到页面
    that.setData({
      list: list,
      totalPrice: total.toFixed(2)
    });
  }
})