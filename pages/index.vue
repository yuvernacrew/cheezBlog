<template>
  <div class="l-main--left">
    <div class="c-card">
      <ArticleList :articles="articles.items"></ArticleList>
    </div>
  </div>
</template>

<script>
import createClient from '@/plugins/contentful.js';
import ArticleList from '~/components/Organisms/ArticleList.vue';

const client = createClient;

export default {
  components: {
    ArticleList,
  },
  data() {
    return {};
  },
  async asyncData({ env }) {
    const articles = await client.getEntries({
      content_type: env.CTF_BLOG_POST_TYPE_ID,
      order: '-sys.createdAt',
    });
    return {
      articles,
    };
  },
};
</script>
