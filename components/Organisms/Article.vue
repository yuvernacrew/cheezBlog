<template>
  <div class="l-main--left">
    <div class="c-card">
      <ArticleTitle :title="item.fields.title"></ArticleTitle>
      <ArticleItem :article="item.fields.items"></ArticleItem>
      <p>作成日 : {{ item.sys.createdAt }}</p>
      <p>更新日 : {{ item.sys.updatedAt }}</p>
      <p>タグ：{{ item.tag }}</p>
      {{ item }}
    </div>
  </div>
</template>

<script>
import ArticleTitle from '~/components/Molecules/ArticleTitle.vue'
import ArticleItem from '~/components/Molecules/ArticleItem.vue'

export default {
  props: ['item'],
  components: {
    ArticleTitle,
    ArticleItem,
  },
  data() {
    return {
      title: '',
      article: '',
    }
  },
}
</script>
