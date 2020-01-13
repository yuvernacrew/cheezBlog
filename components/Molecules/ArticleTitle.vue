<template>
  <h1>{{ title }}</h1>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>
<style lang="scss" scope>
h1 {
  position: relative;
  font-size: 24px;
  line-height: 1.8rem;
  padding: 13px 6px 8px;
  margin-bottom: 20px;
  font-weight: 700;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 6px;
    border-radius: 5px;
    background-size: 6px 6px;
    background-repeat: repeat-x;
    background-image: linear-gradient(
      -45deg,
      transparent 25%,
      $primary-color 25%,
      $primary-color 50%,
      transparent 50%,
      transparent 75%,
      $primary-color 75%,
      $primary-color
    );
  }
}
</style>
