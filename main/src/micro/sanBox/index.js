export function performScriptByEval(script) {
  eval(script)
}

export function performScriptByFunction(script) {
  // TODO:为什么调用call
  new Function(script).call(window, window)
}
