export function performScriptByEval(script, appName, global) {
  console.log('appName', appName)
  const scriptText = `
    () => {
      ${script}
      return window[appName]
    }
  `
  return eval(scriptText).call(global, global)
}

export function performScriptByFunction(script, appName, global) {
  const scriptText = `
    ${script}
    return window['appName'] 
  `
  // TODO:为什么调用call
  return new Function(scriptText).call(global, global)
}
