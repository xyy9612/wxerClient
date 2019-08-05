// pages/Information/Information.js
var util = require('../../utils/util.js') //引入微信自带的日期格式化
const app = getApp()
Page({
  data: {
  
    userName: '',
    userPhone: '',
    userAddress: '',
    userDoorNumber:''
  },
  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value
    })
  },

  userNameInput: function (e) {
    // console.log(e.detail.value)设置用户名
    this.setData({
      userName: e.detail.value
    })
  },
  userPhonehInput: function (e) {
    //设置部门
    this.setData({
      userPhoneh: e.detail.value
    })
  },
  userAddressInput: function (e) {
    //设置电话
    this.setData({
      userAddress: e.detail.value
    })
  },
  userDoorNumberInput: function (e) {
    //设置电话
    this.setData({
      userDoorNumber: e.detail.value
    })
  },
  orderMeeting: function () { //提交input信息到后台
    var userName = this.data.userName;
    console.log(userName)
    var userPhoneh = this.data.userPhoneh;
    console.log(userPhoneh)
    var userAddress = this.data.userAddress;
    console.log(userAddress)
    var userDoorNumber = this.data.userDoorNumber;
    console.log(userAddress)


    // 检测手机号是否填写
    if (userName) {
      app.showModal('手机号未填写');
      return;
    }
    if (app.validate(userName, 'emoji')) {
      app.showModal('手机号不能包含特殊字符');
      return;
    }
  }
})