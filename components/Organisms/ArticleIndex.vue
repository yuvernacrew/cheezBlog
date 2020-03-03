<template>
  <article>
    <ArticleTitle :title="article.fields.title"></ArticleTitle>
    <img v-if="imageUrlFlag" :src="imageUrl" />
    <ArticleItem :content="article.fields.content"></ArticleItem>
  </article>
</template>

<script>
import ArticleTitle from '~/components/Molecules/ArticleTitle.vue';
import ArticleItem from '~/components/Molecules/ArticleItem.vue';

export default {
  components: {
    ArticleTitle,
    ArticleItem,
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
