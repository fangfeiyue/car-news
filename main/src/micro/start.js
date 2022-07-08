import { setAppList, getAppList } from '@/micro/const/subApps.js'
import { currentApp } from './utils/index'
import { rewriteRouter } from './router/rewriteRouter'
import { setMainLifecycle } from './const/mainLifeCycle'

rewriteRouter()

export const registerMicroApp = (appList, lifeCycle) => {
  setAppList(appList)
  lifeCycle.beforeLoad[0]()

  setTimeout(() => {
    lifeCycle.mounted[0]()
  }, 3000);
  
  setMainLifecycle(lifeCycle)
}

export const start = () => {
  const apps = getAppList()

  if (!apps.length) throw Error('子应用列表为空，请正确注册')

  const app = currentApp()

  if (app) {
    const { pathname, hash } = window.location
    const url = pathname + hash
    
    window.history.pushState('', '', url)
    window.__CURRENT_SUB_APP__ = app.activeRule
  }
}
