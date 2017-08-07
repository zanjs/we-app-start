import Index from '../../controller/index'

Page({
  data: {
    items: [
      { name: '1', value: '东区', checked: 'true' },
      { name: '2', value: '南区' },
      { name: '3', value: '西区' },
      { name: '4', value: '北区' },
    ]
  },
  onLoad(options) {
    const vm = this
  },
  bindinput(e) {
    Index.bindinput(e)
  },
  submit() {
    Index.submit()
  },
  onShow() {},
  /**
   * 分享
   * @returns
   */
  onShareAppMessage() {
    const vm = this
    const data = vm.data

    return {
      'title': '会员登记',
      'desc': '会员登记',
      'path': '/page/index/index',
    }
  },
  onReady() {},
  onHide() {},
  onUnload() {},
})