import { fetchResource } from '../utils/fetchResource'

export const loadHtml = async (app) => {
  const { container, entry } = app

  const html = await _parseHtml(entry)

  const ctx = document.querySelector(container)
  
  if (!ctx) throw new Error('容器不存在，请查看')
  
  ctx.innerHTML = html

  return app
}

const _parseHtml = async (entry) => {
  const html = await fetchResource('http://localhost:8080/vue3#/index' || entry)

  // TODO: 为什么要创建div？
  const div = document.createElement('div')
  div.innerHTML = html

  const [ dom, scriptSrc, script ] = await _parseJS()
  console.log(dom, scriptSrc, script)

  return html
}

const _parseJS = async () => {
  return []
}