const request = require('./request.js')
//获取应用实例
const app = getApp()

/**
 * xyy 分类获取列表方法
 */
function getPageData(paramValue) {
  let url = 'category/getCategory';
  const param = {
    parent: paramValue
  }
  this.showLoading();
  // 加载loading
  return new Promise(function(resolve, reject) {
    request.request({
      url: url,
      data: param,
      success: function(res) {
        if (res.length > 0) {
          resolve(res)
        } else {
          reject('失败')
        }
        // 隐藏loading
        wx.hideLoading();
      },
      fail: function(res) {
        console.log(res)
        wx.hideLoading();
      },
      complete: function(res) {
        console.log(res)
        wx.hideLoading();
      },
    })
  }).catch(function(error) {
    // 处理 getJSON 和 前一个回调函数运行时发生的错误
    console.log('暂无数据!', error);
  });
}

/**
 * 时间戳转化为日期格式
 */
function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

/** 
 * 时间戳转化为年 月 日 时 分 秒 
 * number: 传入时间戳 
 * format：返回格式，支持自定义，但参数必须与formateArr里保持一致 
*/
function formatTimeTwo(number, format) {

  var formateArr = ['Y', 'M', 'D', 'h', 'm', 's'];
  var returnArr = [];

  var date = new Date(number * 1000);
  returnArr.push(date.getFullYear());
  returnArr.push(formatNumber(date.getMonth() + 1));
  returnArr.push(formatNumber(date.getDate()));

  returnArr.push(formatNumber(date.getHours()));
  returnArr.push(formatNumber(date.getMinutes()));
  returnArr.push(formatNumber(date.getSeconds()));

  for (var i in returnArr) {
    format = format.replace(formateArr[i], returnArr[i]);
  }
  return format;
}

/**
 * js防止多次点击
 */
function throttle(fn, gapTime) {
  if (gapTime == null || gapTime == undefined) {
    gapTime = 1500
  }
  let _lastTime = null
  // 返回新的函数
  return function() {
    var context = this
    let _nowTime = +new Date()
    if (_nowTime - _lastTime > gapTime || !_lastTime) {
      fn.apply(context, arguments) //将this和参数传给原函数
      _lastTime = _nowTime
    }
  }
}


/**
 * loading加载
 */
function showLoading(text = '数据加载中...') {
  wx.showLoading({
    title: text
  });
}


/**
 * 模态框
 */
function showModal(content, phoneNum) {
  wx.showModal({
    title: '提示',
    content: content,
    cancelText: '取消',
    confirmText: '确定',
    success: function(res) {
      var cancel = res.cancel
      if (!cancel) {
        if (phoneNum) {
          wx.makePhoneCall({
            phoneNumber: phoneNum
          })
        }
      }
    }
  })
}

/**
 * 提示框
 */
function showToast(title) {
  wx.showToast({
    title: title,
    icon: 'none',
    mask: true,
    duration: 2000
  })

}
/**
 * 筛选搜索的内容
 */
function getSearchRes(searchData, searchVal, searchkey, resLen) {
  var searchRes = searchData.filter(item => {
    return item[searchkey].toLowerCase().indexOf(searchVal.toLowerCase()) > -1;
  });
  return searchRes;
}

module.exports = {
  throttle: throttle,
  showLoading: showLoading,
  getPageData: getPageData,
  showModal: showModal,
  showToast: showToast,
  getSearchRes: getSearchRes,
  
  formatTime: formatTime,  // 日期转时间戳
  formatTimeTwo: formatTimeTwo  // 时间戳转日期
}