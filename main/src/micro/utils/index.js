import { getAppList } from '../const/subApps.js'

export const patchRouter = (event, eventName) => {
  return function() {
    const e = new Event(eventName)
    event.apply(this, arguments)
    window.dispatchEvent(e)
  }
}

export const currentApp = () => {
  const pathname = location.pathname
  return _filterApp('activeRule', pathname)
}

export const findAppByRoute = (router) => {
  return _filterApp('activeRule', router)
}

const _filterApp = (key, val) => {
  return getAppList().filter(item => item[key] === val)[0]
}

export const isTurnApp = () => {
  // window.__ORIGIN_APP__ = window.__CURRENT_SUB_APP__
  
  // if (window.__CURRENT_SUB_APP__ === window.location.pathname) return false
  
  // const currentApp = window.location.pathname.match(/(\/\w+)/)

  // if (!currentApp) return

  // window.__CURRENT_SUB_APP__ = currentApp[0]
  // console.log( window.__CURRENT_SUB_APP__, window.__ORIGIN_APP__)

  // return true

  // ----
  const { pathname } = window.location
  let prefix = pathname.match(/(\/\w+)/)
  
  if (prefix) prefix = prefix[0]

  window.__ORIGIN_APP__ = window.__CURRENT_SUB_APP__

  if (window.__CURRENT_SUB_APP__ === prefix) return false

  if (!prefix) return

  window.__CURRENT_SUB_APP__ = prefix

  return true
}