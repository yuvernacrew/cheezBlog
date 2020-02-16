<template>
  <aside class="l-aside">
    <asideProfile></asideProfile>
    <asideTagsList></asideTagsList>
    <asideLatestArticlesList></asideLatestArticlesList>
  </aside>
</template>

<script>
import AsideProfile from '~/components/Organisms/AsideProfile.vue';
import AsideTagsList from '~/components/Organisms/AsideTagsList.vue';
import AsideLatestArticlesList from '~/components/Organisms/AsideLatestArticlesList.vue';

export default {
  components: {
    AsideTagsList,
    AsideProfile,
    AsideLatestArticlesList,
  },
};
</script>
