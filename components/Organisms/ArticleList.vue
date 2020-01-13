<template>
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
              src="~/assets/images/noimage.svg"
            />
          </div>
          <div>
            <h2 class="p-listBar__title">{{ article.fields.title }}</h2>
            <ul v-if="article.fields.tags">
              <li v-for="tag in article.fields.tags" :key="tag.sys.id">
                <nuxt-link
                  :to="{ name: 'index', query: { tagId: tag.sys.id } }"
                >
                  {{ tag.fields.tag }}
                </nuxt-link>
              </li>
            </ul>
            <div class="p-listBar__description">
              <p>{{ article.fields.description }}</p>
            </div>
          </div>
        </div>
      </nuxt-link>
    </li>
  </ul>
</template>
<script>
export default {
  props: {
    articles: {
      type: Array,
      required: true,
    },
  },
};
</script>
<style lang="scss">
.p-listBar {
  li {
    box-sizing: border-box;
    padding: 10px;
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
        background-color: $mono-light-color;
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
    }
  }

  &__title {
    margin-bottom: 4px;
    font-size: 18px;
    color: $mono-darker-color;
  }

  &__description {
    font-size: 12px;
    color: $mono-dark-color;
  }
}
</style>
