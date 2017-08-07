import { Promise } from '../libs/es6-promise'
import INITDATA from '../util/initData'

export default {
  App: getApp(),
  /**
   * 初始化页面
   * @param {page vm} page
   */
  intPagedata(page) {
    page.setData(INITDATA.data)
  },
  /**
   * 支付请求
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
  isNone(s) {
    return s === '' || s == null || s === undefined
  },
}