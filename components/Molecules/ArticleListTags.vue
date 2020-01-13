<template>
  <ul class="p-tagList">
    <li v-for="tag in tags" :key="tag.sys.id" class="p-tagList__item">
      <span><font-awesome-icon icon="tag" class="p-tagList__icon"/></span>
      {{ tag.fields.name }}
    </li>
  </ul>
</template>
<script>
export default {
  props: {
    tags: {
      type: Array,
      defauls: [],
    },
  },
};
</script>
<style lang="scss" scoped>
.p-tagList {
  margin-bottom: 12px;

  &__item {
    display: inline-block;
    padding: 4px 12px;
    margin: 0 8px 0 0;
    font-size: 12px;
    color: $mono-darker-color;
    background-color: $mono-color;
    border-radius: 20px;
  }

  &__icon {
    margin-right: 4px;
    font-size: 12px;
  }
}
</style>
