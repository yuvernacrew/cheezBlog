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
import HeaderMain from '~/components/Template/HeaderMain.vue';
import FooterMain from '~/components/Template/FooterMain.vue';

export default {
  components: {
    HeaderMain,
    FooterMain,
  },
};
</script>
