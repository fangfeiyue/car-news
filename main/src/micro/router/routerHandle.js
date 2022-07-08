import { isTurnApp } from '../utils/index'
import { lifeCycle } from '../lifeCycle'

export const turnApp = async () => {
  if (isTurnApp()) {
    await lifeCycle()
  }
}
