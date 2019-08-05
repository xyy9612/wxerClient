// pages/supplyDetails/supplyDetails.js
var recordList = require('../../data/data.js').recordList
var util = require('../../utils/util.js')
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pictureUrl: app.config.pictureUrl, // 图片地址
   
    dataList: {}, // 图片详情接收的值
    photoArr:[],
    buyCar: true,
    // 轮播参数
    currentData: 0,
    swiperCurrent: 0,
    circular: true,
    indicatorDots: false,
    autoplay: true,
    interval: 4000,
    duration: 1000,
    vertical: true,
    // 测试数据
    text: [
      {
        "id":'1111111111111',
        "phone":'11111111119',
        "time": '1504733860'
      },
      {
        "id":'22222222',
        "phone":'22222222229',
        "time": '1564733860'
      },
      {
        "id":'33333333333',
        "phone":'33333333339',
        "time": '1484733860'
      }
    ],

    slider: [],

    recordList: {} // 成交记录

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    const that = this
    let text = that.data.text 
    //调用
    that.getDirect(options)
    // that.setTimeCount(that.data.countDown)
    var countDown_time = '00:21:03';
    this.count_down(countDown_time)

    // that.countDown();
    //
    console.log(options.qianggou)
    if (options.qianggou == 'qianggou') {
      that.setData({
        buyCar : false
      })
    }else{
      that.getInterface(options.id)
      that.setData({
        buyCar : true
      })
    }

    // 测试
    that.setData({
      text: that.data.text
    })
    //

    for( let i in text){
      let time = text[i].time
      text[i].time = util.formatTimeTwo(time, 'h小时m分钟') // 时间转换
     
      that.setData({
        text: text
      })
    }
    //
    // that.setCountDown();
    // that.setTimeCount();
    // let dataList = options
    // if (dataList.subtitle && dataList.bigimg == 'undefined' || ''){
    //   dataList.subtitle = '暂无副标题'
    //   dataList.bigimg = ''
    // }
    // for (let i = 0; i < options.length;i++){
    //   console.log(options[i].subtitle)
    // }
   
  },

  /**
   * 倒计时
   */
  count_down: function (countDown_time) {
    var that = this;
    var time = countDown_time.split(':')
    var hhh = parseInt(time[0])
    var mmm = parseInt(time[1])
    var sss = parseInt(time[2])
    this.setData({
      sss: (sss < 10) ? '0' + sss : sss,
      mmm: (mmm < 10) ? '0' + mmm : mmm,
      hhh: (hhh < 10) ? '0' + hhh : hhh
    })
    var Interval = setInterval(function () {
      if (sss > 0) {
        sss--
      } else {
        console.log('时间到')
        clearInterval(Interval)
      }
      if (sss == 0) {
        if (mmm > 0) {
          mmm--
          sss = 59;
        }
        if (mmm == 0 && hhh > 0) {
          hhh--
          sss = 59;
          mmm = 59;
        }
      }
      that.setData({
        sss: (sss < 10) ? '0' + sss : sss,
        mmm: (mmm < 10) ? '0' + mmm : mmm,
        hhh: (hhh < 10) ? '0' + hhh : hhh
      })
    }, 1000)
  },

  /**
  * 格式化时间
  */

  // //轮播图的切换事件  
  // swiperChange: function (e) {
  //   //只要把切换后当前的index传给<swiper>组件的current属性即可  
  //   this.setData({
  //     swiperCurrent: e.detail.current
  //   })

  // },
  // //点击指示点切换  
  // chuangEvent: function (e) {
  //   this.setData({
  //     swiperCurrent: e.currentTarget.id
  //   })

  // },

  /**
   * 获取 直供详情接口
   */
  getInterface:function(ids){
    const that = this
    // 显示loading
    app.showLoading('加载中...');
    // 请求
    wx.request({
      url: app.config.backUrl + 'apiDirect/details',
      data: {
        id: ids,
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      method: 'POST',
      success: res => {
        console.log()
        wx.hideLoading();

        that.setData({
          dataList: res.data.data,
          slider: res.data.data.img
        })
        console.log(that.data.dataList)
        console.log(res.data.data.img)


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
   * 获取 抢购详情接口
   */
  getRushBuy:function(ids){
    const that = this
    // 显示loading
    app.showLoading('加载中...');
    // 请求
    wx.request({
      url: app.config.backUrl + 'apiIndex/activity',
      data: {
        community_id: 3,
        uid: 1,
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      method: 'POST',
      success: res => {
        console.log()
        wx.hideLoading();

        that.setData({
          dataList: res.data.data,
          slider: res.data.data.img
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
   * 获取 直供_成交记录接口
   */
  getDirect:function(ids){
    const that = this
    // console.log(util.formatTime(sjc, 'h:m'));
    // 显示loading
    app.showLoading('加载中...');
    // 请求
    wx.request({
      url: app.config.backUrl + 'apiDirect/record',
      data: {
        page: 1,
        direct_id: ids
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      method: 'POST',
      success: res => {
        console.log()
        wx.hideLoading();
        console.log('............',res.data.data)
        // that.setData({
        //   recordList: res.data.data
        // })
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
   * 加入购物车 
   */
  goinByCar:function(){
    const that = this
    console.log(this.data.dataList.id)
    // 显示loading
    app.showLoading('加载中...');
    // 请求
    wx.request({
      url: app.config.backUrl + 'apiCar/in_car',
      data: {
        uid: app.config.uid_code,
        direct_id: that.data.dataList.id
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      method: 'POST',
      success: res => {
        wx.hideLoading();
        // 提示
        wx.showToast({
          title: '加入成功',
          mask: true
        });
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