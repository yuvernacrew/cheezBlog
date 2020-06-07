<template>
  <div class="c-tag">
    <span span><font-awesome-icon icon="tag" class="p-tagList__icon"/></span>
    {{ name }}
  </div>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      default: '',
    },
  },
};
</script>
<style lang="scss" scoped>
.c-tag {
  display: inline-block;
  padding: 4px 12px;
  font-size: 12px;
  color: $mono-darker-color;
  background-color: $mono-light-color;
  border-radius: 20px;

  &__icon {
    margin-right: 4px;
    font-size: 12px;
  }
}
</style>
