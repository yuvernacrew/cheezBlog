<template>
  <div>
    <h1 class="p-articleList__title">{{ setTitle }}</h1>
    <ul class="p-listBar">
      <li v-for="article in articles" :key="article.id">
        <nuxt-link :to="{ name: 'article-id', params: { id: article.sys.id } }">
          <div class="p-listBar__container">
            <div class="p-listBar__thumb">
              <img
                v-if="article.fields.mainVisual"
                :src="article.fields.mainVisual.fields.file.url"
              />
              <img
                v-if="!article.fields.mainVisual"
                src="~/assets/images/noimage.png"
              />
            </div>
            <div>
              <h2 class="p-listBar__title">{{ article.fields.title }}</h2>
              <articleListTags
                :tags="article.fields.tags"
                v-if="article.fields.tags"
              ></articleListTags>
              <div class="p-listBar__description">
                <p>{{ article.fields.description }}</p>
              </div>
            </div>
          </div>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>
<script>
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
  }
}

.p-listBar {
  li {
    box-sizing: border-box;
    padding: 10px 0;
    list-style-type: none;

    &:not(:last-child) {
      border-bottom: 1px solid $mono-color;
    }

    a {
      display: block;
      width: 100%;
      height: 100%;
      padding: 10px;

      &:hover {
        background-color: $mono-lighter-color;
        border-radius: 4px;
      }
    }
  }

  &__container {
    @media (min-width: $breakpoint) {
      display: flex;
      justify-content: left;
    }
  }

  &__thumb {
    width: 160px;
    margin-right: 20px;

    img {
      width: 100%;
    }

    @media (max-width: $breakpoint) {
      width: 100%;
      margin-bottom: 10px;
    }
  }

  &__title {
    margin-bottom: 10px;
    font-size: 18px;
    line-height: 1.4;
    color: $mono-darker-color;
  }

  &__description {
    font-size: 12px;
    color: $mono-dark-color;
  }
}
</style>
