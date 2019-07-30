// pages/supply/supply.js
// let supplyList = require('../../data/data.js').supply

Page({

  /**
   * 页面的初始数据
   */
  data: {
    supplyList : [
      {
        "id": "1",
        "img": "../../images/img/car1.png",
        "bigimg": "../../images/img/details.png",
        "title": "儿童滑行车两轮平衡车小孩踏步车",
        "subtitle": "稳固安全环保",
        "price": "0.00",
        "exprice": "100"
      },
      {
        "id": "2",
        "img": "../../images/img/car2.png",
        "title": "儿童滑行车两轮平衡车小孩踏步车",
        "price": "0.00",
        "exprice": "100"
      },
      {
        "id": "3",
        "img": "../../images/img/car3.png",
        "title": "儿童滑行车两轮平衡车小孩踏步车",
        "price": "0.00",
        "exprice": "100"
      },
      {
        "id": "4",
        "img": "../../images/img/car4.png",
        "title": "儿童滑行车两轮平衡车小孩踏步车",
        "price": "0.00",
        "exprice": "100"
      },
      {
        "id": "4",
        "img": "../../images/img/car4.png",
        "title": "儿童滑行车两轮平衡车小孩踏步车",
        "price": "0.00",
        "exprice": "100"
      }, {
        "id": "4",
        "img": "../../images/img/car4.png",
        "title": "儿童滑行车两轮平衡车小孩踏步车",
        "price": "0.00",
        "exprice": "100"
      }, {
        "id": "4",
        "img": "../../images/img/car4.png",
        "title": "儿童滑行车两轮平衡车小孩踏步车",
        "price": "0.00",
        "exprice": "100"
      }
    ]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const that = this


    // supplyList = that.data.supplyList
    // that.setData({
    //   inkDetail: inkDetail[0]
    // })
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
    console.log(id, bigimg)
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