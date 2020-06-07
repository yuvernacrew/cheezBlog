<template>
  <aside class="l-aside">
    <profile></profile>
    <tagsList></tagsList>
    <latestArticlesList></latestArticlesList>
  </aside>
</template>

<script>
import Profile from '~/components/Organisms/layout/sideBar/Profile.vue';
import TagsList from '~/components/Organisms/layout/sideBar/TagsList.vue';
import LatestArticlesList from '~/components/Organisms/layout/sideBar/LatestArticles.vue';

export default {
  components: {
    Profile,
    TagsList,
    LatestArticlesList,
  },
};
</script>
