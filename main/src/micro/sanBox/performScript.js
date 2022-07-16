export function performScriptByEval(script, appName, global) {
  window.proxy = global
  const scriptText = `
    ((window) => {
      ${script}
      return window['${appName}'] 
    })(window.proxy)
  `
  return eval(scriptText)
}

export function performScriptByFunction(script, appName, global) {
  window.proxy = global

  const scriptText = `
    return ((window) => {
      ${script}
      return window['${appName}']
    })(window.proxy)
  `
  return new Function(scriptText)()
}
