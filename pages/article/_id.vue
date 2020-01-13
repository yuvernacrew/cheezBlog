<template>
  <div class="l-main--2columns">
    <div class="l-main--left">
      <div class="c-card">
        <articleIndex :article="article"></articleIndex>
      </div>
    </div>
    <asideNav></asideNav>
  </div>
</template>

<script>
import createClient from '~/plugins/contentful.js';
import ArticleIndex from '~/components/Organisms/ArticleIndex.vue';
import AsideNav from '~/components/Template/AsideNav.vue';

const client = createClient;

export default {
  components: {
    ArticleIndex,
    AsideNav,
  },
  async asyncData({ params: { id } }) {
    return {
      article: await client.getEntry(id),
    };
  },
};
</script>
