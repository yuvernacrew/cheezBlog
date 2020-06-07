<template>
  <ul class="p-tagList">
    <li v-for="tag in tags" :key="tag.sys.id" class="p-tagList__item">
      <nuxt-link :to="{ name: 'index', query: { tagId: tag.sys.id } }">
        <app-tag :name="tag.fields.name"></app-tag>
      </nuxt-link>
    </li>
  </ul>
</template>
<script>
import AppTag from '~/components/Atoms/AppTag.vue';

export default {
  components: {
    AppTag,
  },
  props: {
    tags: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
<style lang="scss" scoped>
.p-tagList {
  margin-top: 16px;

  &__item {
    display: inline-block;
    margin: 0 8px 0 0;
  }
}
</style>
