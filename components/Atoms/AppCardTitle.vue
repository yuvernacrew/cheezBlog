<template>
  <p class="p-cardTitle">{{ title }}</p>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss" scoped>
.p-cardTitle {
  display: flex;
  align-items: center;
  margin-bottom: 14px;

  &::before {
    width: 8px;
    height: 8px;
    margin-right: 10px;
    content: '';
    background-color: $primary-color;
  }
}
</style>
