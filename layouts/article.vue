<template>
  <div class="wrapper">
    <header-main></header-main>
    <main class="l-main">
      <nuxt />
    </main>
    <footer-main></footer-main>
  </div>
</template>
<script>
import HeaderMain from '~/components/Organisms/layout/HeaderMain.vue';
import FooterMain from '~/components/Organisms/layout/FooterMain.vue';

export default {
  components: {
    HeaderMain,
    FooterMain,
  },
};
</script>
