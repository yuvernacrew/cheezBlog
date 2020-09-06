<template>
  <div class="l-main--2columns">
    <div class="l-main--left">
      <app-card>
        <article-index :article="articleContent"></article-index>
      </app-card>
    </div>
    <article-sideBar></article-sideBar>
  </div>
</template>

<script>
import generateArticleOgp from '~/plugins/generateArticleOgp';
import ArticleIndex from '~/components/Organisms/article/ArticleIndex.vue';
import ArticleSideBar from '~/components/Organisms/article/ArticleSideBar.vue';
import AppCard from '~/components/Atoms/AppCard.vue';

export default {
  layout: 'article',
  components: {
    ArticleIndex,
    ArticleSideBar,
    AppCard,
  },
  async asyncData({ params: { id }, payload, store }) {
    const articleContent =
      payload || store.state.articles.find(article => article.id === id);
    return { articleContent };
  },
  computed: {
    ogpImage() {
      const ogpText = this.articleContent.fields.title || 'cheezBlog';
      return generateArticleOgp(ogpText);
    },
  },
  head() {
    return {
      title: this.articleContent.fields.title || 'cheezBlogの記事ページ',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            this.articleContent.fields.description ||
            'cheezBlogの記事ページです。',
        },
        { hid: 'og:type', property: 'og:type', content: 'article' },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.articleContent.fields.title || 'cheezBlogの記事ページ',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            this.articleContent.fields.description ||
            'cheezBlogの記事ページです。',
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `https://cheezblog.netlify.com${this.$route.path}`,
        },
        { hid: 'og:image', property: 'og:image', content: this.ogpImage },
        { property: 'article:publisher', content: 'FacebookURL' },
        { property: 'fb:app_id', content: 'FacebookAppID' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@Twitter' },
      ],
    };
  },
};
</script>
