import Status from '../set/status'
import Message from '../message/modal'
import Event from '../mwx/event'
import SetIndex from '../set/index'
// middleware
import IndexMiddleware from '../middleware/index'

export default {
  submit() {

    if(!IndexMiddleware.submit()){
        return
    }

    Status.loading()

    setTimeout(()=>{
        Status.loadingClone()
        Message.success()
    },1000)
  },
  bindinput(e){
    const name = Event.dataset(e,'name')
    const val = Event.value(e)
    SetIndex.index(name,val)
  },
}