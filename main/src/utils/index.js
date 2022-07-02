import { registerMicroApp, start } from '@/micro/index.js'
import { loading } from '../store'

export const registerApp = list => {
  registerMicroApp(list, {
    beforeLoad: [
      () => {
        loading.openLoading()
        console.log('beforeLoad')
      }
    ],
    mounted: [
      () => {
        loading.closeLoading()
        console.log('mounted')
      }
    ],
    destroyed: [
      () => {
        console.log('destroyed')
      }
    ]
})
  start()
}
