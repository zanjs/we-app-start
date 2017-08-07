import Stack from '../mwx/stack'

export default {
  index(e, v) {
    const vm = Stack.page()

    switch (e) {
      case 'name':
        vm.setData({
          name: v,
        })
        break
      case 'phone':
        vm.setData({
          phone: v,
        })
        break
      case 'wechat':
        vm.setData({
          wechat: v,
        })
        break
      case 'address':
        vm.setData({
          address: v,
        })
        break
      default:
    }
  },
}