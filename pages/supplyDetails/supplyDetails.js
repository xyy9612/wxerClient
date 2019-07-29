// pages/supplyDetails/supplyDetails.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataList:{},
    outClass: 'select-item-check', // 切换选项卡选中状态,装机工单
    inClass: '',  // 切换选项卡选中状态,维修工单
    type: 1, // 1为商品详情
    showFlag: true,
    moreFlag: true,
    noDataFlag: false,  // 显示暂无数据标识:true表示显示
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const that = this
    // const img = options.img
    let dataList = options
    console.log('---',dataList)

    that.setData({
      dataList: dataList
    })
  },

  setInitData: function (type) {
    let tempOutClass = 'select-item-check';  // 切换选项卡选中状态,安装列表
    let tempInClass = '';   // 切换选项卡选中状态,维修列表
    let tempPresaleClass = '';  // 切换选项卡选中状态,售前列表
    // 判断工单标识 1为安装,2为维修, 3为售前
    if (type === 2) {
      tempOutClass = '';
      tempInClass = 'select-item-check';
      tempPresaleClass = '';
    }
    if (type === 3) {
      tempOutClass = '';
      tempInClass = '';
      tempPresaleClass = 'select-item-check';
    }
    this.setData({
      outClass: tempOutClass, // 切换选项卡选中状态,安装
      inClass: tempInClass,  // 切换选项卡选中状态,维修
      presaleClass: tempPresaleClass, // 切换选项卡选中状态,售前
      type: type, // 出工单标识 1为安装,2为维修
      page: 1,
      showFlag: true,
      moreFlag: true,
      noDataFlag: false,
      list: []
    });
    // 获取数据
    this.getPageData();
  },

  workOrderDetail: function (e) {
    const currentIndex = e.currentTarget.dataset.currentIndex;
    const workOrders = this.data.list;
    const workOrder = workOrders[currentIndex];

    // wx.navigateTo({
    //   url: '../going-work-order-detail/going-work-order-detail?work_number=' + workOrder.work_number,
    // })
  },
  // // 点击获取安装列表
  // getANList: function () {
  //   // 设置初始化参数并拿初始化列表数据
  //   this.setInitData(1);
  // },

  // // 点击获取维修列表
  // getWXList: function () {
  //   // 设置初始化参数并拿初始化列表数据
  //   this.setInitData(2);
  // },
  // // 点击获取维修列表
  // getPSList: function () {
  //   // 设置初始化参数并拿初始化列表数据
  //   this.setInitData(3);
  // },








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