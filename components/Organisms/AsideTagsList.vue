<template>
  <div class="c-card p-asideTag">
    <p class="p-asideTag__title">タグ一覧</p>
    <ul>
      <li v-for="tag in tags" :key="tag.id" class="p-asideTag__item">
        <nuxt-link :to="{ name: 'index', query: { tagId: tag.id } }">
          <font-awesome-icon icon="tag" class="p-asideTag__icon" />{{
            tag.name
          }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['tags']),
  },
};
</script>
<style lang="scss" scoped>
.p-asideTag {
  &__title {
    display: flex;
    align-items: center;
    margin-bottom: 14px;

    &::before {
      width: 8px;
      height: 8px;
      margin-right: 10px;
      content: '';
      background-color: $primary-color;
    }
  }

  &__item {
    display: inline-block;
    padding: 4px 12px;
    margin: 0 8px 10px 0;
    font-size: 12px;
    background-color: $mono-light-color;
    border-radius: 20px;

    a {
      display: block;
      width: 100%;
      color: $mono-darker-color;
    }
  }

  &__icon {
    margin-right: 4px;
    font-size: 12px;
  }
}
</style>
