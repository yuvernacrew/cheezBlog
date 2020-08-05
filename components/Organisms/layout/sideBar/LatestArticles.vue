<template>
  <app-card add-class="p-asideLatestArticles">
    <app-card-title title="新着記事一覧"></app-card-title>
    <ul class="p-asideLatestArticles__list">
      <li v-for="latestArticle in latestArticles" :key="latestArticle.id">
        <p class="p-asideLatestArticles__date">
          <font-awesome-icon icon="calendar-alt" />
          {{ $dayjs(latestArticle.createdAt).format('YYYY.MM.DD') }}
        </p>
        <nuxt-link
          :to="{ name: 'article-id', params: { id: latestArticle.id } }"
          class="p-asideLatestArticles__anchor"
        >
          <p>{{ latestArticle.fields.title }}</p>
        </nuxt-link>
      </li>
    </ul>
  </app-card>
</template>
<script>
/* TODO: 親からpropsで渡すよう変更 */
import { mapGetters } from 'vuex';
import AppCardTitle from '~/components/Atoms/AppCardTitle.vue';
import AppCard from '~/components/Atoms/AppCard.vue';

export default {
  components: {
    AppCardTitle,
    AppCard,
  },
  computed: {
    ...mapGetters(['latestArticles']),
  },
};
</script>
<style lang="scss" scoped>
// TODO: 別途対応でFLOCSSでまとめる
.p-asideLatestArticles {
  margin-bottom: 20px;

  &__list {
    li {
      padding-bottom: 12px;

      &:not(:last-child) {
        margin-bottom: 12px;
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
    line-height: 1.4;

    &:hover {
      color: $accent-color;
    }
  }
}
</style>
