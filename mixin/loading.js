export default {
  data() {
    return {
      loadingTime: 2000,
    };
  },
  async mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => this.$nuxt.$loading.finish(), this.loadingTime);
    });
  },
};
