<template>
  <div class="c-card p-asideLatestArticles">
    <p class="p-asideLatestArticles__title">新着記事一覧</p>
    <ul class="p-asideLatestArticles__list">
      <li v-for="latestArticle in latestArticles" :key="latestArticle.id">
        <p class="p-asideLatestArticles__date">
          <font-awesome-icon icon="calendar-alt" />
          {{ $moment(latestArticle.createdAt).format('YYYY.MM.DD') }}
        </p>
        <nuxt-link
          :to="{ name: 'article-id', params: { id: latestArticle.id } }"
          class="p-asideLatestArticles__anchor"
        >
          <p>{{ latestArticle.title }}</p>
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
<style lang="scss" scoped>
// TODO: 別途対応でFLOCSSでまとめる
.p-asideLatestArticles {
  margin-bottom: 20px;

  // TODO: titleはatom化
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

  &__list {
    li {
      padding: 12px 0;

      &:not(:last-child) {
        border-bottom: 1px solid $mono-color;
      }
    }
  }

  &__date {
    margin-bottom: 6px;
    font-size: 14px;
    color: $mono-dark-color;
  }

  &__anchor {
    font-size: 14px;
    color: $mono-darker-color;
  }
}
</style>
