<template>
  <div class="l-main--2columns">
    <div class="l-main--left">
      <div class="c-card">
        <articleIndex :article="articleContent"></articleIndex>
      </div>
    </div>
    <asideNav></asideNav>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ArticleIndex from '~/components/Organisms/ArticleIndex.vue';
import AsideNav from '~/components/Template/AsideNav.vue';

export default {
  layout: 'article',
  components: {
    ArticleIndex,
    AsideNav,
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
  computed: {
    ...mapGetters(['articleItem']),
    articleContent() {
      return this.articleItem(this.$route.params.id);
    },
    ogpImage() {
      const ogpText = this.articleContent.fields.title || 'cheezBlog';
      return `https://res.cloudinary.com/cheezblog/image/upload/l_text:notosansjp-bold.otf_40_bold:${ogpText},co_rgb:333,w_580,c_fit/v1591455615/ogp_dibxqg.png`;
    },
  },
};
</script>
