<template>
  <div class="l-main--2columns">
    <div class="l-main--left">
      <div class="c-card">
        <Article :article="article"></Article>
      </div>
    </div>
    <Aside></Aside>
  </div>
</template>

<script>
import createClient from '~/plugins/contentful.js';
import Article from '~/components/Organisms/Article.vue';
import Aside from '~/components/Template/Aside.vue';

const client = createClient;

export default {
  components: {
    Article,
    Aside,
  },
  async asyncData({ params: { id } }) {
    return {
      article: await client.getEntry(id),
    };
  },
};
</script>
