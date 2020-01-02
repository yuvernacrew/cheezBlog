import marked from 'marked'
import hljs from 'highlightjs'
// import hljsDefineVue from 'highlightjs-vue'

const markedHtml = () => {
  // hljsDefineVue(hljs)
  return marked.setOptions({
    langPrefix: 'hljs ',
    highlight(code, lang) {
      // .value で ハイライトされたHTML文字列 を返す。
      return hljs.highlightAuto(code, [lang]).value
    },
  })
}

export default markedHtml()
