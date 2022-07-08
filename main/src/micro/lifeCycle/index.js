import { findAppByRoute } from '../utils'
import { getMainLifeCycle } from '../const/mainLifeCycle'
import { loadHtml } from '../loader'

export const lifeCycle = async () => {
  // 上一个子应用
  const preApp = findAppByRoute(window.__ORIGIN_APP__)
  // 下一个子应用
  const nextApp = findAppByRoute(window.__CURRENT_SUB_APP__)
  
  // 如果没有下一个子应用，直接返回
  if (!nextApp) return

  // 执行上一个子应用的销毁生命周期
  if (preApp && preApp.destroyed) {
    await destroyed(preApp)
  }

  // 执行下一个自应用的 beforeLoad 和 mounted 生命周期
  const app = await beforeLoad(nextApp)
  await mounted(app)
}

const beforeLoad = async (app) => {
  await runMainLifeCycle('beforeLoad')
  
  app && app.beforeLoad && app.beforeLoad()
  
  const subApp = await loadHtml(app)
  // TODO: 这里为什么还要调用 beforeLoad 方法
  console.log('subApp', subApp, app)
  subApp && subApp.beforeLoad && subApp.beforeLoad()

  return subApp
}

const mounted = async (app) => {
  app && app.mounted && app.mounted()
  await runMainLifeCycle('mounted')
}

const destroyed = async (app) => {
  app && app.destroyed && app.destroyed()
  await runMainLifeCycle('destroyed')
}

// 用于执行主应用相应的生命周期
const runMainLifeCycle = async (type) => {
  const mainLife = getMainLifeCycle()
  await Promise.all(mainLife[type].map(async life => await life()))
}
