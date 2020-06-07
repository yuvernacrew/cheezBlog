<template>
  <div class="l-main--2columns">
    <div class="l-main--left">
      <app-card>
        <article-list :articles="articles"></article-list>
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
