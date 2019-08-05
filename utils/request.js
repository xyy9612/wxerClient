// 请求地址
var baseUrl = 'http://192.168.1.177/' // 测试接口
// 封装请求
function request(query) {
  var url = baseUrl + query.url
  var queryData = query.data || {}
  var method = query.method || 'POST'
  wx.request({
    url: url,
    data: queryData,
    header: {
      'content-type': 'application/json'
    },
    method: method,
    dataType: 'json',
    responseType: 'text',
    success: function (res) {
      if (res.data.ServerNo === 200) {
        typeof query.success === 'function' && query.success(res.data.ResultData)
      } else if (res.data.ServerNo === 400) {
        typeof query.fail === 'function' && query.fail()
      }
    },
    fail: function (res) {
      // console.log('请求失败')
    },
    complete: function (res) {
      // console.log('请求完成')
    },
  })
}
module.exports.request = request
  /**
   * 网络数据请求功能
   */
