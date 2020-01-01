<template>
  <div class="c-article">
    <h1>{{ post.fields.title }}</h1>
    <div v-html="markedHtml"></div>
  </div>
</template>

<script>
import marked from 'marked'
import hljs from 'highlightjs'
import hljsDefineVue from 'highlightjs-vue'
import { createClient } from '~/plugins/contentful.js'

const client = createClient()

export default {
  computed: {
    markedHtml() {
      return marked(this.post.fields.items)
    },
  },
  asyncData({ env, params }) {
    return Promise.all([
      client.getEntries({
        'sys.id': env.CTF_PERSON_ID,
      }),
      client.getEntry(params.id),
    ]).then(([entries, post]) => {
      return {
        person: entries,
        post,
      }
    })
  },
  created() {
    // markedでhighlightjsを利用するように設定
    hljsDefineVue(hljs)
    marked.setOptions({
      langPrefix: 'hljs ',
      highlight(code, lang) {
        // .value で ハイライトされたHTML文字列 を返す。
        return hljs.highlightAuto(code, [lang]).value
      },
    })
  },
}
</script>

<style lang="scss" scope>
// primary #ddc96c
// accent #ea4b60
// primary-light #fffcef
// gray #f5f5f5
.c-article {
  h1 {
    position: relative;
    font-size: 1.45rem;
    line-height: 1.8rem;
    padding: 13px;
    padding-left: 6px;
    padding-bottom: 8px;
    margin-top: 1.4rem;
    margin-bottom: 1rem;
    font-weight: 700;

    &::after {
      position: absolute;
      content: '';
      z-index: 0;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 6px;
      border-radius: 5px;
      background-size: 6px 6px;
      background-image: linear-gradient(
        -45deg,
        transparent 25%,
        #ddc96c 25%,
        #ddc96c 50%,
        transparent 50%,
        transparent 75%,
        #ddc96c 75%,
        #ddc96c
      );
    }
  }
}
</style>
