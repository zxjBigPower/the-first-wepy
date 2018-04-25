export const getData = function(url, obj, type) {
  /*
url: 路径，
obj,要传递到后台的数据
type:方式
   */
  return new Promise((resolve, reject) => {
    wx.request({
      url: url,
      data: obj,
      method: type,
      header: {
        "content-type": 'application/xml'
      },
      success: (res) => {
        var data = res.data;
         if (res.data) {
          resolve(res.data)
        } else {
          reject(res.data)
        }
      },
    })
  })
}
