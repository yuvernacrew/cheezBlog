<template>
  <div class="c-card" :class="addClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    addClass: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss" scoped>
.c-card {
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
}
</style>
