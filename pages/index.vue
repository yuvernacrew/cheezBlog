<template>
  <div class="l-main--2columns">
    <div class="l-main--left">
      <div class="c-card">
        <articleList :articles="articles"></articleList>
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
  components: {
    ArticleList,
    AsideNav,
  },
  computed: {
    ...mapState(['articles']),
  },

  watchQuery: true,
};
</script>
