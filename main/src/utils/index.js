import { registerMicroApp, start } from '@/micro/index.js'
import { loading } from '../store'

export const registerApp = list => {
  registerMicroApp(list, {
    beforeLoad: [
      () => {
        loading.openLoading()
      }
    ],
    mounted: [
      () => {
        loading.closeLoading()
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
