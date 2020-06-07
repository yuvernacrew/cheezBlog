<template>
  <div class="wrapper">
    <headerMain></headerMain>
    <main class="l-main">
      <nuxt />
    </main>
    <footerMain></footerMain>
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
