let snapShort = {}

export class ProxySandbox {
  constructor() {
    this.proxy = null
    this.active()
  }

  active() {
    this.proxy = new Proxy(window, {
      get(target, key) {
        // 修复 TypeError: Illegal invocation
        if (typeof target[key] === 'function') {
          return target[key].bind(target)
        }
 
        // 修复： Cannot read properties of undefined (reading 'search')
        return snapShort[key] || target[key]
      },
      set(target, key, value) {
        snapShort[key] = value
        // 表示成功
        return true
      }
    })
  }

  deactivated() {
    snapShort = {}
  }
}