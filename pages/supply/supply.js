// pages/supply/supply.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    supplyList: [
      {
        "id":"1",
        "img": "../../images/img/car1.png",
        "title": "儿童滑行车两轮平衡车小孩踏步车",
        "subtitle": "稳固安全环保",
        "price": "0.00",
        "exprice":"100"
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
      }
    ]
  },

  // 店家跳转详情
  jumpDetail: function (e) {
    const id = e.currentTarget.dataset.id
    const img = e.currentTarget.dataset.img
    const title = e.currentTarget.dataset.title
    const price = e.currentTarget.dataset.price
    const subtitle = e.currentTarget.dataset.subtitle
    console.log(id,img)
    wx.navigateTo({
      url: '/pages/supplyDetails/supplyDetails?id=' + id + '&img=' + img + '&title=' + title + '&price=' + price + '&subtitle=' + subtitle
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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