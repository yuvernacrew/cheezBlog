<template>
  <div>
    <h1>{{ post.fields.title }}</h1>
    <div v-html="markedHtml"></div>
  </div>
</template>

<script>
import marked from 'marked'
import hljs from 'highlightjs'
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
      // fetch the owner of the blog
      client.getEntries({
        'sys.id': env.CTF_PERSON_ID,
      }),
      // fetch all blog posts sorted by creation date
      client.getEntry(params.id),
    ]).then(([entries, post]) => {
      // return data that should be available
      // in the template
      return {
        person: entries,
        post,
      }
    })
  },
  created() {
    // markedでhighlightjsを利用するように設定
    marked.setOptions({
      langPrefix: '',
      highlight(code, lang) {
        return hljs.highlightAuto(code, [lang]).value
      },
    })
  },
}
</script>
