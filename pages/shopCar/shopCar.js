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
    shopNum:'',
    shopIdArr: [],
    shopid: '',
    // 金额
    totalPrice: 0, // 总价，初始为0
    // 全选状态
    selectAllStatus: false, // 全选状态，默认全选
  },
  onLoad: function() {
    // that.getShopCarList()

    //获取列表
    const that = this
    // 显示loading
    app.showLoading('加载中...');
    // 请求
    wx.request({
      url: app.config.backUrl + 'apiCar/car',
      data: {
        uid: app.config.uid_code,
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      method: 'POST',
      success: res => {
        wx.hideLoading();
        that.setData({
          list: res.data.data
        })
      },
      error: function(res) {
        app.errorLog(res);
        wx.hideLoading();
        app.showModal(res);
      },
      fail: function(res) {
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
  getShopCarList: function() {

  },
  /**
   * 当前商品选中事件
   */
  selectList(e) {
    const that = this;
    that.data.shopIdArr.push(String(e.currentTarget.dataset.shopid))
    console.log('-----', that.data.shopIdArr)
    var index = e.currentTarget.dataset.index;
    // 获取到商品列表数据
    var list = that.data.list;
    // 默认全选
    that.data.selectAllStatus = true;
    // 循环数组数据，判断----选中/未选中[selected]
    list[index].selected = !list[index].selected;
    // 如果数组数据全部为selected[true],全选
    for (var i = list.length - 1; i >= 0; i--) {
      if (!list[i].selected) {
        that.data.selectAllStatus = false;
        break;
      }
    }
    // 重新渲染数据
    that.setData({
      list: list,
      selectAllStatus: that.data.selectAllStatus
    })
    // 调用计算金额方法
    that.count_price();
  },
  // 编辑
  btn_edit: function() {
    var that = this;
    if (bool) {
      that.setData({
        edit_show: "block",
        edit_name: "完成",
        show_edit: "none"
      })
      bool = false;
    } else {
      that.setData({
        edit_show: "none",
        edit_name: "编辑",
        show_edit: "block"
      })
      bool = true;
    }

  },
  // 删除

  // /** */
  deletes: function(e) {
    var that = this;
    let list = that.data.list;
    let shopid = that.data.shopIdArr

    console.log(shopid)
    // 显示loading
    app.showLoading('加载中...');
    // 请求
    wx.request({
      url: app.config.backUrl + 'apiCar/out_car',
      data: JSON.stringify({
        'id': shopid, //需要删除的数据
      }),
      header: {
        'content-type': 'application/json' // 默认值
      },
      method: 'POST',
      success: res => {
        console.log(res)
        if (res.data.statusCode == 0) {
          //删除

          wx.showToast({
            title: res.data.msg,
            icon: 'loading',
            duration: 1500
          })
        } else {
          wx.showToast({
            title: res.data.msg,
            icon: 'success',
            duration: 1000
          })
        }
        that.setData({
          list: list.splice(shopid, 1)
        })


        this.count_price();
        wx.setStorageSync("list", list) //存缓存
      },


      error: function(res) {
        app.errorLog(res);
        wx.hideLoading();
        app.showModal(res);
      },
      fail: function(res) {
        app.failLog(res);
        wx.hideLoading();
        app.showModal('网络错误，请稍候再试');
      }
    });
  },

  /**
   * 购物车全选事件
   */
  selectAll(e) {
    // 全选ICON默认选中
    let selectAllStatus = this.data.selectAllStatus;
    // true  -----   false
    selectAllStatus = !selectAllStatus;
    // 获取商品数据
    let list = this.data.list;
    // 循环遍历判断列表中的数据是否选中
    for (let i = 0; i < list.length; i++) {
      list[i].selected = selectAllStatus;
    }
    // 页面重新渲染
    this.setData({
      selectAllStatus: selectAllStatus,
      list: list
    });
    // 计算金额方法
    this.count_price();
  },


  /**
   * 绑定加数量事件
   */
  btn_add(e) {
    // 获取点击的索引
    const index = e.currentTarget.dataset.index;
    // 获取商品数据
    let list = this.data.list;
    // 获取商品数量
    let num = list[index].num;
    // 点击递增
    num = num + 1;
    list[index].num = num;
    // 重新渲染 ---显示新的数量
    this.setData({
      list: list
    });
    // 计算金额方法
    this.count_price();
  },


  /**
   * 绑定减数量事件
   */
  btn_minus(e) {
    //   // 获取点击的索引
    const index = e.currentTarget.dataset.index;
    // const obj = e.currentTarget.dataset.obj;
    // console.log(obj);
    // 获取商品数据
    let list = this.data.list;
    // 获取商品数量
    let num = list[index].num;
    // 判断num小于等于1  return; 点击无效
    if (num <= 1) {
      return false;
    }
    // else  num大于1  点击减按钮  数量--
    num = num - 1;
    list[index].num = num;
    // 渲染页面
    this.setData({
      list: list
    });
    // 调用计算金额方法
    this.count_price();
  },
  // 提交订单
  btn_submit_order: function() {
    var that = this;
    if(that.data.totalPrice == 0){
      console.log()
      wx.showToast({
        title: '未选择任何商品',
        icon: "loading",
        duration: 1000
      })
    } else{
      // that.data.shopNum.push(String(e.currentTarget.dataset.shopNum))
      // console.log('-----', that.data.shopIdArr)
    }
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