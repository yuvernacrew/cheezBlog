<template>
  <div>
    <h1 class="p-articleList__title">{{ setTitle }}</h1>
    <ul class="p-listBar">
      <li v-for="article in articles" :key="article.id">
        <div class="p-listBar__container">
          <div>
            <p class="p-listBar__date">
              <font-awesome-icon icon="calendar-alt" />
              {{ $moment(article.createdAt).format('YYYY.MM.DD') }}
            </p>
            <h2>
              <nuxt-link
                :to="{ name: 'article-id', params: { id: articles.id } }"
                class="p-listBar__title"
                >{{ article.fields.title }}
              </nuxt-link>
            </h2>
            <div
              v-if="article.fields.description"
              class="p-listBar__description"
            >
              {{ article.fields.description }}
            </div>
            <articleListTags
              :tags="article.fields.tags"
              v-if="article.fields.tags"
            ></articleListTags>
          </div>
          <div v-if="article.fields.mainVisual" class="p-listBar__thumb">
            <img :src="article.fields.mainVisual.fields.file.url" />
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
/* TODO: 親からpropsで渡すよう変更 */
import { mapState } from 'vuex';
import ArticleListTags from '~/components/Molecules/ArticleListTags.vue';

export default {
  components: {
    ArticleListTags,
  },
  props: {
    articles: {
      type: Array,
      required: true,
    },
  },
  computed: {
    ...mapState(['categories', 'tags']),
    setTitle() {
      let categoryTitle = 'すべての記事';
      this.categories.forEach(value => {
        if (this.$route.query.categoryId === value.id) {
          categoryTitle = `${value.name}の記事`;
        }
      });
      this.tags.forEach(value => {
        if (this.$route.query.tagId === value.id) {
          categoryTitle = `${value.name}の記事`;
        }
      });
      return categoryTitle;
    },
  },
};
</script>
<style lang="scss">
.p-articleList {
  &__title {
    display: flex;
    align-items: center;

    &::before {
      width: 8px;
      height: 8px;
      margin: 0 10px;
      content: '';
      background-color: $primary-color;
    }

    @media (max-width: $breakpoint) {
      &::before {
        margin: 0 10px 0 0;
      }
    }
  }
}

.p-listBar {
  > li {
    box-sizing: border-box;
    padding: 16px 10px;
    list-style-type: none;

    &:not(:last-child) {
      border-bottom: 1px solid $mono-color;
    }

    @media (max-width: $breakpoint) {
      padding: 16px 0;
    }
  }

  &__container {
    display: flex;
    justify-content: space-between;
  }

  &__thumb {
    width: 100px;
    margin-left: 20px;

    img {
      width: 100px;
      height: 100px;
      object-fit: cover;
      border-radius: 8px;
    }

    @media (max-width: $breakpoint) {
      width: 50px;
      margin-left: 10px;

      img {
        width: 50px;
        height: 50px;
        object-fit: cover;
        border-radius: 8px;
      }
    }
  }

  &__title {
    display: block;
    font-size: 18px;
    font-weight: bold;
    line-height: 1.4;
    color: $mono-darker-color;

    &:hover {
      color: $accent-color;
      text-decoration: underline;
    }
  }

  &__description {
    margin-top: 4px;
    font-size: 14px;
    line-height: 1.4;
    color: #666;
  }

  &__date {
    margin-bottom: 4px;
    font-size: 12px;
    color: $mono-dark-color;
  }
}
</style>
