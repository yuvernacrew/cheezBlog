<template>
  <div class="c-card p-asideTag">
    <p class="p-asideTag__title">記事一覧</p>
    <ul>
      <li
        v-for="latestArticle in latestArticles"
        :key="latestArticle.id"
        class="p-asideTag__item"
      >
        <nuxt-link
          :to="{ name: 'article-id', params: { id: latestArticle.id } }"
        >
          <p>{{ latestArticle.title }}</p>
          {{ $moment(latestArticle.createdAt).format('YYYY.MM.DD') }}
        </nuxt-link>
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
