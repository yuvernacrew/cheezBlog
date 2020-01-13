<template>
  <header class="c-header">
    <p class="c-header__title">cheezBlog</p>
    <ul class="c-header__list">
      <li>
        <nuxt-link :to="{ name: 'index' }" exact>
          <p>TOP</p>
        </nuxt-link>
      </li>
      <li v-for="category in categories" :key="category.id" exact>
        <nuxt-link :to="{ name: 'index', query: { categoryId: category.id } }">
          <p>{{ category.name }}</p>
        </nuxt-link>
      </li>
    </ul>
  </header>
</template>
<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['categories']),
  },
};
</script>
<style lang="scss" scoped>
.c-header {
  width: 100vw;
  padding: 15px 20px 0;
  margin-bottom: 40px;
  font-size: 12px;
  text-align: center;
  background-color: #fff;

  &__title {
    margin-bottom: 12px;
    font-family: 'Signika';
    font-size: 32px;
  }

  &__list {
    display: flex;
    justify-content: center;

    li {
      @media (min-width: $breakpoint) {
        min-width: 100px;
      }

      a {
        display: block;
        width: 100%;
        height: 100%;
        padding: 15px;
        color: $mono-darker-color;

        &:not(:last-child) {
          border-right: 1px solid $mono-dark-color;
        }
      }
    }
  }
}

.nuxt-link-exact-active {
  position: relative;

  &::after {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 4px;
    content: '';
    background-color: $primary-color;
  }
}
</style>
