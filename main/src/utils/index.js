import { registerMicroApp, start } from '@/micro/index.js'

export const registerApp = list => {
  registerMicroApp(list)
  start()
}
