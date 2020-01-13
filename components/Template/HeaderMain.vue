<template>
  <header class="c-header">
    <ul>
      <li v-for="category in categories" :key="category.id">
        <nuxt-link :to="{ name: 'index', query: { categoryId: category.id } }">
          <p>{{ category.name }}</p>
        </nuxt-link>
      </li>
    </ul>
    <ul>
      <li v-for="tag in tags" :key="tag.id">
        <nuxt-link :to="{ name: 'index', query: { tagId: tag.id } }">
          <p>{{ tag.name }}</p>
        </nuxt-link>
      </li>
    </ul>
  </header>
</template>
<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['categories', 'tags']),
  },
};
</script>
<style lang="scss" scoped>
.c-header {
  width: 100vw;
  padding: 15px;
  margin-bottom: 40px;
  font-size: 12px;
  text-align: center;
  background-color: #fff;
  // box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
}
</style>
