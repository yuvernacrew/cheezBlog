<template>
  <div class="l-main--2columns">
    <div class="l-main--left">
      <div class="c-card">
        <articleIndex :article="articleItem(paramsId)"></articleIndex>
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
  components: {
    ArticleIndex,
    AsideNav,
  },
  computed: {
    ...mapGetters(['articleItem']),
  },
  asyncData({ params: { id } }) {
    return {
      paramsId: id,
    };
  },
};
</script>
