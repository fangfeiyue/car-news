import { performScriptByEval } from './performScript'

export function sandBox(app, script) {
  window.__MICRO_WEB__ = true

  const lifeCycle = performScriptByEval(script, app.name)

  if (_isCheckLifeCycle(lifeCycle)) {
    app.mount = lifeCycle.mount
    app.unmount = lifeCycle.unmount
    app.bootstrap = lifeCycle.bootstrap 
  }
}

function _isCheckLifeCycle(lifeCycle) {
  return lifeCycle && lifeCycle.bootstrap && lifeCycle.mount && lifeCycle.unmount
}