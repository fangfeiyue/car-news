export class SnapShortSandBox {
  constructor() {
    this.proxy = window
    
    this.active()
  }

  active() {
    this.snapShot = new Map()
    
    for (const key  in window) {
      this.snapShot[key] = window[key]
    }
  }

  deactivated() {
    for (const key  in window) {
      if (window[key] !== this.snapShot[key]) {
        window[key] = this.snapShot[key]
      }
    }
  }
}
