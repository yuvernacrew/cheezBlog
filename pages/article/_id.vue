<template>
  <div class="l-main--left">
    <div class="c-article">
      <h1>{{ post.fields.title }}</h1>
      <div v-html="markedHtml"></div>
    </div>
  </div>
</template>

<script>
import createClient from '~/plugins/contentful.js'
import marked from '~/plugins/marked.js'

const client = createClient

export default {
  computed: {
    markedHtml() {
      return marked(this.post.fields.items)
    },
  },
  asyncData(params) {
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

<style lang="scss" scope>
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
      background-repeat: repeat-x;
      background-image: linear-gradient(
        -45deg,
        transparent 25%,
        $primary-color 25%,
        $primary-color 50%,
        transparent 50%,
        transparent 75%,
        $primary-color 75%,
        $primary-color
      );
    }
  }
}
</style>
