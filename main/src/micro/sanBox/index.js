import { performScriptByEval } from './performScript'
import { SnapShortSandBox } from './snapShortSandBox'

export function sandBox(app, script) {
  window.__MICRO_WEB__ = true

  const proxy = new SnapShortSandBox()

  if (!app.proxy) {
    app.proxy = proxy
  }

  const lifeCycle = performScriptByEval(script, app.name, app.proxy.proxy)

  if (_isCheckLifeCycle(lifeCycle)) {
    app.mount = lifeCycle.mount
    app.unmount = lifeCycle.unmount
    app.bootstrap = lifeCycle.bootstrap 
  }
}

function _isCheckLifeCycle(lifeCycle) {
  return lifeCycle && lifeCycle.bootstrap && lifeCycle.mount && lifeCycle.unmount
}