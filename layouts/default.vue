<template>
  <div class="wrapper">
    <Header></Header>
    <main class="l-main">
      <nuxt />
    </main>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from '~/components/Template/Header.vue';
import Footer from '~/components/Template/Footer.vue';

export default {
  components: {
    Header,
    Footer,
  },
};
</script>
