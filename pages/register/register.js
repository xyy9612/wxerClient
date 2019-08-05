// pages/register/register.js
const app = getApp();
Page({
  data: {
    // 搜索框状态
    //结果框状态
    viewShowed: true,
    // 搜索框值
    inputVal: "",
    //搜索渲染推荐数据
    list: [],

    //车辆数据
    carNum: "",
    deviceId: "",
  },
 
  // 清除搜索框值
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
  // 获取输入框的值
  inputTyping: function (e) {

    var that = this;

    //如果值为空，返回
    if (e.detail.value == '') {
      return;
    }
    that.setData({
      viewShowed: true, //显示结果框
      inputVal: e.detail.value //变量赋值
    });
    //console.log(this.data.inputVal);

    wx.request({ //根据关键字发起请求
      url: app.config.backUrl + 'apiLogin/community',
      data: { community: e.detail.value },
      method: 'GET',
      header: {
        'Content-type': 'application/json'
      },
      success: function (res) {
        console.log(res)
        // that.setData({  //设置结果集
        //   list: res.data
        // })
      }
    });


  },
  // 获取选中推荐列表中的值
  btn_name: function (res) {
    console.log(res.currentTarget.dataset.name);
    console.log(res.currentTarget.dataset.id);

    this.setData({
      inputVal: "", //清空结果
      viewShowed: false, //显示结果框
      carNum: res.currentTarget.dataset.name, //赋值变量
      deviceId: res.currentTarget.dataset.id
    });
  }
});