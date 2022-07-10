import { performScriptByEval } from '../sanBox'
import { fetchResource } from '../utils/fetchResource'

export const loadHtml = async (app) => {
  const { container, entry } = app

  const [dom, script] = await _parseHtml(entry)
  console.log(script)

  const ctx = document.querySelector(container)
  
  if (!ctx) throw new Error('容器不存在，请查看')

  ctx.innerHTML = dom

  script.forEach(item => performScriptByEval(item))

  return app
}

const _parseHtml = async (entry) => {
  const html = await fetchResource(entry)

  // TODO: 为什么要创建div？
  const div = document.createElement('div')
  div.innerHTML = html

  const [ dom, scriptSrc, script ] = await _getResources(div, entry)
  const fetchScripts = await Promise.all(scriptSrc.map(async item => await fetchResource(item)))
  
  const allScripts = script.concat(fetchScripts)

  return [dom, allScripts]
}

const _getResources = async (root, entry) => {
  const script = []
  const scriptSrc = []
  const dom = root.outerHTML

  function deepParse(element) {
    const child = element.children || []
    const parent = element.parent

    if (element.nodeName.toLowerCase() === 'script') {
      const src = element.getAttribute('src')
      if (!src) {
        script.push(element.outerHTML)
      } else if (src.startsWith('http')) {
        scriptSrc.push(src)
      } else {
        scriptSrc.push(`http:${entry}${src}`)
      }

      if (parent) {
        parent.replaceChild(document.createComment('此 JS 文件已经被微前端替换'), element)
      }
    }

    // TODO: link 也可以加载 JS 吗，link 一般会有预加载，但是这样的话同一个 JS 文件就被加载了两次
    if (element.nodeName.toLowerCase() === 'link') {
      const href = element.getAttribute('href')

      if (href.endsWith('.js')) {
        if (href.startsWith('http')) {
          scriptSrc.push(href)
        } else {
          scriptSrc.push(`http:${entry}${href}`)
        }
      }
    }

    for (let i = 0, len = child.length; i < len; i++) {
      deepParse(child[i])
    }
  }

  deepParse(root)

  return [dom, scriptSrc, script]
}