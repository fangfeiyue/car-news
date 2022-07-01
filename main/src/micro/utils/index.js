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

const _filterApp = (key, val) => {
  return getAppList().filter(item => item[key] === val)[0] || {}
}

export const isTurnApp = () => {
  if (window.__CURRENT_SUB_APP__ === window.location.pathname) return false
  
  return true
}