<template>
  <div class="l-main--2columns">
    <div class="l-main--left">
      <div class="c-card">
        <articleList :articles="articleItems"></articleList>
      </div>
    </div>
    <asideNav></asideNav>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import ArticleList from '~/components/Organisms/ArticleList.vue';
import AsideNav from '~/components/Template/AsideNav.vue';

export default {
  layout: 'top',
  components: {
    ArticleList,
    AsideNav,
  },
  computed: {
    ...mapState(['articles']),
    searchTag() {
      return this.articles.filter(article => {
        const tagIDs = article.fields.tags
          ? article.fields.tags.map(tag => tag.sys.id)
          : '';
        if (tagIDs === '') return '';
        return tagIDs.some(tagID => {
          return tagID === this.$route.query.tagId;
        });
      });
    },
    articleItems() {
      if (this.$route.query.tagId) return this.searchTag;
      return this.articles;
    },
  },
  head() {
    return {
      titleTemplate: null,
      title: 'cheezBlog',
    };
  },
  watchQuery: true,
};
</script>
