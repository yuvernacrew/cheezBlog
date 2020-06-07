<template>
  <div class="l-main--2columns">
    <div class="l-main--left">
      <app-card>
        <article-index :article="article"></article-index>
      </app-card>
    </div>
    <article-sideBar></article-sideBar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import createClient from '~/plugins/contentful';
import cloudinary from '~/plugins/cloudinary';
import ArticleIndex from '~/components/Organisms/article/ArticleIndex.vue';
import ArticleSideBar from '~/components/Organisms/article/ArticleSideBar.vue';
import AppCard from '~/components/Atoms/AppCard.vue';

const client = createClient();

export default {
  layout: 'article',
  components: {
    ArticleIndex,
    ArticleSideBar,
    AppCard,
  },
  async asyncData({ params: { id }, payload }) {
    if (payload) return { article: payload };
    return { article: await client.getEntry(id) };
  },
  computed: {
    /* TODO: payload問題が解消できたら、this.articleをthis.articleContentに変更 */
    ...mapGetters(['articleItem']),
    articleContent() {
      return this.articleItem(this.$route.params.id);
    },
    ogpImage() {
      const ogpText = this.article.fields.title || 'cheezBlog';
      const encodeText = encodeURI(ogpText);
      return cloudinary.url('ogp.png', {
        version: '1591455615',
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
      title: this.article.fields.title || 'cheezBlogの記事ページ',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            this.article.fields.description || 'cheezBlogの記事ページです。',
        },
        { hid: 'og:type', property: 'og:type', content: 'article' },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.article.fields.title || 'cheezBlogの記事ページ',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            this.article.fields.description || 'cheezBlogの記事ページです。',
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
