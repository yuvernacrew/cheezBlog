<template>
  <article>
    <app-article-title :title="article.fields.title"></app-article-title>
    <img v-if="imageUrlFlag" :src="imageUrl" />
    <article-content :content="article.fields.content"></article-content>
  </article>
</template>

<script>
import AppArticleTitle from '~/components/Molecules/AppArticleTitle.vue';
import ArticleContent from '~/components/Organisms/article/ArticleContent.vue';

export default {
  components: {
    AppArticleTitle,
    ArticleContent,
  },
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
  computed: {
    imageUrl() {
      const { mainVisual } = this.article.fields;
      return mainVisual ? mainVisual.fields.file.url : '';
    },
    imageUrlFlag() {
      const { mainVisual } = this.article.fields;
      return mainVisual;
    },
  },
};
</script>
