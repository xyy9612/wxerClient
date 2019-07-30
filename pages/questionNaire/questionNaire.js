// pages/questionNaire/questionNaire.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentCheck: 0,
    focus:'',
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

  formSubmit: function (e) {
    let sex = e.detail.value.sex
    let age = e.detail.value.age
    let typeShop = e.detail.value.typeShop
    let proposal = e.detail.value.proposal
    console.log('数据为：', sex, age, typeShop, proposal);

  //   this.setData({
  //     proposal: "",
  //     age,
  //     typeShop,
  //     sex
  //   })
  }

  
})