<template>
  <div class="l-main--left">
    <div class="c-card">
      <articleList :articles="articles.items"></articleList>
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
  async asyncData({ env, query: { categoryId, tagId } }) {
    const articlesSearchConfig = {
      content_type: env.CTF_BLOG_POST_TYPE_ID,
      order: '-sys.createdAt',
      'fields.tags.sys.id': tagId,
      'fields.category.sys.id': categoryId,
    };
    const articles = await client.getEntries(articlesSearchConfig);
    return {
      articles,
    };
  },
  watchQuery: true,
};
</script>
