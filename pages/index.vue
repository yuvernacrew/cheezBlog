<template>
  <div class="l-main--2columns">
    <div class="l-main--left">
      <div class="c-card">
        <article-list :articles="articles"></article-list>
      </div>
    </div>
    <top-side-bar></top-side-bar>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import ArticleList from '~/components/Organisms/top/ArticleList.vue';
import TopSideBar from '~/components/Organisms/top/TopSideBar.vue';

export default {
  layout: 'top',
  components: {
    ArticleList,
    TopSideBar,
  },
  computed: {
    ...mapState(['articles']),
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
