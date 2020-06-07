<template>
  <div class="c-card p-asideTag">
    <app-card-title title="タグ一覧"></app-card-title>
    <ul>
      <li v-for="tag in tags" :key="tag.id" class="p-asideTag__item">
        <nuxt-link :to="{ name: 'index', query: { tagId: tag.id } }">
          <app-tag :name="tag.name"></app-tag>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>
<script>
/* TODO: 親からpropsで渡すよう変更 */
import { mapState } from 'vuex';
import AppTag from '~/components/Atoms/AppTag.vue';
import AppCardTitle from '~/components/Atoms/AppCardTitle.vue';

export default {
  components: {
    AppCardTitle,
    AppTag,
  },
  computed: {
    ...mapState(['tags']),
  },
};
</script>
<style lang="scss" scoped>
.p-asideTag {
  margin-bottom: 20px;

  &__item {
    display: inline-block;
    margin: 0 8px 10px 0;
  }
}
</style>
