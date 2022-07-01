import { isTurnApp } from '../utils/index'

export const turnApp = () => {
  if (isTurnApp()) {
    console.log('路由切换')
  }
}
