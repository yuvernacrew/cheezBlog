<template>
  <div>
    <ul>
      <li v-for="item in posts.items" :key="item.id">
        <nuxt-link :to="{ name: 'article-id', params: { id: item.sys.id } }">
          <h2>{{ item.fields.title }}</h2>
          <div>
            <p>{{ item.fields.description }}</p>
          </div>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import createClient from '@/plugins/contentful.js'

const client = createClient

export default {
  asyncData({ env }) {
    return new Promise((resolve) => {
      const posts = client.getEntries({
        content_type: env.CTF_BLOG_POST_TYPE_ID,
        order: '-sys.createdAt',
      })
      resolve(posts)
    }).then((posts) => {
      return {
        posts,
      }
    })
  },
}
</script>
