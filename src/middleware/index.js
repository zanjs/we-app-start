import Stack from '../mwx/stack'
import Message from '../message/modal'

export default {
  submit() {
    const vm = Stack.page()
    const data = vm.data
    if(!data.name || !data.phone || !data.wechat || !data.address){
        Message.submitIncomplete()
        return false
    }
    return true
  },
}