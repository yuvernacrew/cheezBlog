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
import { createClient } from '~/plugins/contentful.js'

const client = createClient()

export default {
  // `env` is available in the context object
  asyncData({ env }) {
    return Promise.all([
      // fetch the owner of the blog
      client.getEntries({
        'sys.id': env.CTF_PERSON_ID,
      }),
      // fetch all blog posts sorted by creation date
      client.getEntries({
        content_type: env.CTF_BLOG_POST_TYPE_ID,
        order: '-sys.createdAt',
      }),
    ]).then(([entries, posts]) => {
      // return data that should be available
      // in the template
      return {
        person: entries,
        posts,
      }
    })
  },
}
</script>
