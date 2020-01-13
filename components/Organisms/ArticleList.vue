<template>
  <ul class="p-listBar">
    <li v-for="article in articles" :key="article.id">
      <nuxt-link :to="{ name: 'article-id', params: { id: article.sys.id } }">
        <img
          v-if="article.fields.mainVisual"
          :src="article.fields.mainVisual.fields.file.url"
        />
        <img
          v-if="!article.fields.mainVisual"
          src="~/assets/images/noimage.svg"
        />
        <h2 class="p-listBar__title">{{ article.fields.title }}</h2>
        <div class="p-listBar__description">
          <p>{{ article.fields.description }}</p>
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
