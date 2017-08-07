import { Promise } from '../libs/es6-promise'

export default {
  /**
   * 微信支付请求
   * @param {any} data
   * @returns
   */
  payment(data) {
    // const vm = this
    return new Promise((resolve) => {
      wx.requestPayment({
        timeStamp: data.TimeStamp.toString(),
        nonceStr: data.NonceStr,
        package: data.Package,
        signType: data.SignType,
        paySign: data.PaySign,
        success(res) {
          resolve(res)
        },
        fail(res) {
          resolve(res)
        },
      })
    })
  },
}