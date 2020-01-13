<template>
  <article>
    <ArticleTitle :title="article.fields.title"></ArticleTitle>
    <img v-if="mainVisual" :src="imageUrl" />
    <ArticleItem :content="article.fields.content"></ArticleItem>
    <p>作成日 : {{ article.sys.createdAt }}</p>
    <p>更新日 : {{ article.sys.updatedAt }}</p>
    <p>タグ：{{ article.tags }}</p>
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
  },
};
</script>
