import Print from '../util/print'

export default {
  userKey: 'userKey',
  userkeyTime: 'userkeyTime', // 用户key创建时间
  title: 'title',
  description: 'description',
  imageList: 'imageList',
  image: 'image',
  email: 'email',
  userInfo: 'userInfo',
  set(key, val) {
    try {
      return wx.setStorageSync(key, val)
    } catch (e) {
      Print.Error(e)
      return false
    }
  },
  get(key) {
    try {
      return wx.getStorageSync(key)
    } catch (e) {
      Print.Error(e)
      return false
    }
  },
  remove(key) {
    try {
      return wx.removeStorageSync(key)
    } catch (e) {
      Print.Error(e)
      return false
    }
  },
}