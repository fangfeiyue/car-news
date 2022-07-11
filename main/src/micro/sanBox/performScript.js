export function performScriptByEval(script, appName) {
  const scriptText = `
    () => {
      ${script}
      return window[appName]
    }
  `
  return eval(scriptText).call(window, window)
}

export function performScriptByFunction(script, appName) {
  const scriptText = `
    ${script}
    return window['appName'] 
  `
  // TODO:为什么调用call
  return new Function(scriptText).call(window, window)
}
