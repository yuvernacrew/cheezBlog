<template>
  <aside class="l-aside">
    <profile></profile>
    <tags-list></tags-list>
    <latest-articles-list></latest-articles-list>
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
