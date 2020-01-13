<template>
  <div>
    <AppEyeCatch />
    <div v-html="markedHtml" class="c-article"></div>
  </div>
</template>
<script>
import marked from '~/plugins/marked.js';
import AppEyeCatch from '~/components/Atoms/AppEyeCatch.vue';

export default {
  components: {
    AppEyeCatch,
  },
  props: {
    content: {
      type: String,
      required: true,
    },
  },
  computed: {
    markedHtml() {
      return marked(this.content);
    },
  },
};
</script>
<style lang="scss">
.c-article {
  h2 {
    padding: 12px 16px 10px;
    margin: 40px 0 20px;
    border-radius: 4px;
    background-color: $primary-light-color;
    font-size: 20px;
    font-weight: bold;
  }

  h3 {
    border-left: 8px solid $primary-color;
    border-bottom: 1px solid $mono-color;
    padding: 6px 16px 8px;
    margin: 32px 0 16px;
    font-size: 16px;
    font-weight: bold;
  }

  h4 {
    display: flex;
    align-items: center;
    margin: 24px 0 12px;

    &::before {
      content: '';
      margin-right: 8px;
      width: 8px;
      height: 8px;
      background-color: $primary-color;
    }
  }

  p {
    font-size: 14spx;
    line-height: 1.6;
    margin-bottom: 1em;
  }

  ul {
    margin-bottom: 12px;

    li {
      display: flex;
      align-items: center;
      font-size: 14px;
      line-height: 1.6;

      &::before {
        content: '';
        margin-right: 8px;
        width: 6px;
        height: 6px;
        border-radius: 3px;
        background-color: $mono-dark-color;
      }
    }
  }

  blockquote {
    border-left: 4px solid $mono-color;
    padding: 10px 18px;
    margin-bottom: 12px;

    p {
      margin-bottom: 0;
      font-size: 12px;
      color: $mono-dark-color;
    }
  }

  a {
    color: $accent-color;
  }

  code {
    font-size: 14px;
    margin-bottom: 12px;
  }
}
</style>
