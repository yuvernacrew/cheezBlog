<template>
  <div class="l-main--2columns">
    <div class="l-main--left">
      <app-card>
        <articleList :articles="articleItems"></articleList>
      </app-card>
    </div>
    <top-side-bar></top-side-bar>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import ArticleList from '~/components/Organisms/top/ArticleList.vue';
import TopSideBar from '~/components/Organisms/top/TopSideBar.vue';
import AppCard from '~/components/Atoms/AppCard.vue';

export default {
  layout: 'top',
  components: {
    ArticleList,
    TopSideBar,
    AppCard,
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
