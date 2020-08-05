<template>
  <app-card add-class="p-asideQiitaArticles">
    <app-card-title title="Qiita投稿記事一覧"></app-card-title>
    <ul class="p-asideQiitaArticles__list">
      <li v-for="article in qiitaArticles" :key="article.id">
        <p class="p-asideQiitaArticles__date">
          <font-awesome-icon icon="calendar-alt" />
          {{ $dayjs(article.createdAt).format('YYYY.MM.DD') }}
        </p>
        <a
          :href="article.url"
          target="_blank"
          class="p-asideQiitaArticles__anchor"
        >
          <p>
            {{ article.title }}
            <span class="p-asideQiitaArticles__icon--externalLink"
              ><font-awesome-icon icon="external-link-alt"
            /></span>
          </p>
        </a>
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
    ...mapGetters(['qiitaArticles']),
  },
};
</script>
<style lang="scss" scoped>
// TODO: 別途対応でFLOCSSでまとめる
.p-asideQiitaArticles {
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
    font-size: 12px;
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

  &__icon {
    &--externalLink {
      font-size: 0.8em;
    }
  }
}
</style>
