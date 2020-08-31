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
import cloudinary from '~/plugins/cloudinary';
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
      const encodeText = encodeURI(ogpText);
      return cloudinary.url('ogp_ut3n8b.png', {
        version: '1598892930',
        transformation: [
          {
            overlay: {
              font_family: 'notosansjp-bold.otf',
              font_size: 40,
              text_align: 'center',
              text: encodeText,
            },
            width: '600',
            color: '#333',
            crop: 'fit',
          },
        ],
      });
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
