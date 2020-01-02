<template>
  <div class="wrapper">
    <Header></Header>
    <main>
      <nuxt />
    </main>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from '~/components/Organisms/Header.vue'
import Footer from '~/components/Organisms/Footer.vue'

export default {
  components: {
    Header,
    Footer,
  },
}
</script>
