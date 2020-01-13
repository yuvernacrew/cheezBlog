<template>
  <aside class="l-aside">
    <asideProfile></asideProfile>
    <asideTagsList></asideTagsList>
  </aside>
</template>

<script>
import AsideTagsList from '~/components/Organisms/AsideTagsList.vue';
import AsideProfile from '~/components/Organisms/AsideProfile.vue';

export default {
  components: {
    AsideTagsList,
    AsideProfile,
  },
};
</script>
