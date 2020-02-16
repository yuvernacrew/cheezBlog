<template>
  <div class="c-card p-asideTag">
    <p class="p-asideTag__title">タグ一覧</p>
    <ul>
      <li
        v-for="latestArticle in latestArticles"
        :key="latestArticle.id"
        class="p-asideTag__item"
      >
        {{ latestArticle }}
      </li>
    </ul>
  </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['latestArticles']),
  },
};
</script>
<style lang="scss" scoped></style>
