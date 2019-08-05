// pages/questionNaire/questionNaire.js
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentSelectTripType: true,

    currentCheck: 0,
    focus:'',
    questionList: [],
    checked: true,
    quesOne:[
      {
        check: '男',
        checked: true
      },
      {
        check: '女',
        checked: false
      }
    ],
    quesTwo:[
      {
        check: '20~30',
        checked: true
      },
      {
        check: '30~40',
        checked: false
      },
      {
        check: '40~50',
        checked: false
      },
      {
        check: '50~60',
        checked: false
      }
    ],
    quesThree:[
      {
        check: '线下店铺',
        checked: true
      },
      {
        check: '网上购物',
        checked: false
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const that = this
    // 显示loading
    app.showLoading('加载中...');
    // 请求
    wx.request({
      url: app.config.backUrl + 'apiQuestion/question',
      data: {
      
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      method: 'POST',
      success: res => {
        wx.hideLoading();
        // // 提示
        // wx.showToast({
        //   title: '登陆成功',
        //   mask: true
        // });
        // 跳转到首页
        console.log(res.data.data)
        that.setData({
          questionList:res.data.data
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
  // 问题1
  checkbox: function (e) {
    var index = e.currentTarget.dataset.index;//获取当前点击的下标
    var quesOne = this.data.quesOne;//选项集合
    if (quesOne[index].checked) return;//如果点击的当前已选中则返回
    quesOne.forEach(item => {
      item.checked = false
    })
    quesOne[index].checked = true;//改变当前选中的checked值
    this.setData({
      quesOne: quesOne
    });
  },
  // 问题2
  checkbox2: function (e) {
    var index = e.currentTarget.dataset.index;//获取当前点击的下标
    var quesTwo = this.data.quesTwo;//选项集合
    if (quesTwo[index].checked) return;//如果点击的当前已选中则返回
    quesTwo.forEach(item => {
      item.checked = false
    })
    quesTwo[index].checked = true;//改变当前选中的checked值
    this.setData({
      quesTwo: quesTwo
    })
  },
  // 问题3
  checkbox3: function (e) {
    var index = e.currentTarget.dataset.index;//获取当前点击的下标
    var quesThree = this.data.quesThree;//选项集合
    if (quesThree[index].checked) return;//如果点击的当前已选中则返回
    quesThree.forEach(item => {
      item.checked = false
    })
    quesThree[index].checked = true;//改变当前选中的checked值
    this.setData({
      quesThree: quesThree
    })
  },
  // 更新data 切换选中状态
  selectedPinche: function (e) {
    console.log(e.currentTarget.dataset.id)
    this.setData({
      currentSelectTripType: e.currentTarget.dataset.id
    })
  },
  selectedBaoche: function (e) {
    this.setData({
      currentSelectTripType: e.currentTarget.dataset.id
    })
  },
  /**
   * 
   * 提交
   * 
   */
  formSubmit: function (e) {
    let question1 = e.detail.value.question1
    let question2 = e.detail.value.question2
    let question3 = e.detail.value.question3
    console.log('数据为：', question1, question2, question3);

  //   this.setData({
  //     proposal: "",
  //     age,
  //     typeShop,
  //     sex
  //   })
  }

  
})