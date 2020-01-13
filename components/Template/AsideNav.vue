<template>
  <aside class="l-aside">
    <asideProfile></asideProfile>
    <asideTagList></asideTagList>
  </aside>
</template>

<script>
import AsideTagList from '~/components/Organisms/AsideTagList.vue';
import AsideProfile from '~/components/Organisms/AsideProfile.vue';

export default {
  components: {
    AsideTagList,
    AsideProfile,
  },
};
</script>
