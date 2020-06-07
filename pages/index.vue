<template>
  <div class="l-main--2columns">
    <div class="l-main--left">
      <div class="c-card">
        <articleList :articles="articles"></articleList>
      </div>
    </div>
    <topSideBar></topSideBar>
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
