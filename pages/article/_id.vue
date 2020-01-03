<template>
  <div class="l-main--2columns">
    <Article :item="this.post"></Article>
    <Aside></Aside>
  </div>
</template>

<script>
import createClient from '~/plugins/contentful.js'
import Article from '~/components/Organisms/Article.vue'
import Aside from '~/components/Organisms/Aside.vue'

const client = createClient

export default {
  components: {
    Article,
    Aside,
  },
  data() {
    return {
      item: '',
    }
  },
  asyncData({ params }) {
    return new Promise((resolve) => {
      resolve(client.getEntry(params.id))
    }).then((post) => {
      return {
        post,
      }
    })
  },
}
</script>
