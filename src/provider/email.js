// stack
import Stack from '../mwx/stack'
import EmailDao from '../dao/email'
import Print from '../util/print'
import MSG from '../mwx/msg'
import Go from '../go'
// status
import Status from '../set/status'

export default {
  /**
   * 发生邮件导出信息
   */
  send() {
    const vm = Stack.page()
    const data = vm.data
    const id = data.id
    const email = data.email
    Status.loading()
    const reqData = EmailDao.send(id, email)
    reqData.then((val) => {
      Status.loadingClone()
      Print.Log(val.message)
      if (val.message) {
        Go.navBack(val.message)
      } else {
        MSG.showModal(val.error)
      }
    })
  },
}