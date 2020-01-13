<template>
  <div>
    <div v-html="markedHtml" class="c-article"></div>
  </div>
</template>
<script>
import initMerked from '~/plugins/marked.js';

export default {
  props: {
    content: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      markedHtml: '',
    };
  },
  async created() {
    const marked = await initMerked();
    this.markedHtml = marked(this.content);
  },
};
</script>
<style lang="scss">
.c-article {
  h2 {
    padding: 12px 16px 10px;
    margin: 40px 0 20px;
    font-size: 20px;
    font-weight: bold;
    line-height: 1.4;
    background-color: $primary-light-color;
    border-radius: 4px;
  }

  h3 {
    padding: 6px 16px 8px;
    margin: 32px 0 16px;
    font-size: 16px;
    font-weight: bold;
    line-height: 1.4;
    border-bottom: 1px solid $mono-color;
    border-left: 8px solid $primary-color;
  }

  h4 {
    display: flex;
    align-items: center;
    margin: 24px 0 12px;

    &::before {
      width: 8px;
      height: 8px;
      margin-right: 8px;
      content: '';
      background-color: $primary-color;
    }
  }

  p {
    margin-bottom: 1em;
    font-size: 14px;
    line-height: 1.6;
  }

  ul {
    margin-bottom: 12px;

    li {
      position: relative;
      padding-left: 12px;
      font-size: 14px;
      line-height: 1.6;

      &::before {
        position: absolute;
        top: 9px;
        left: 0;
        width: 6px;
        height: 6px;
        margin-right: 8px;
        content: '';
        background-color: $mono-dark-color;
        border-radius: 3px;
      }
    }
  }

  blockquote {
    padding: 10px 18px;
    margin-bottom: 12px;
    border-left: 4px solid $mono-color;

    p {
      margin-bottom: 0;
      font-size: 12px;
      color: $mono-dark-color;
    }
  }

  a {
    color: $accent-color;
    word-break: break-all;
  }

  code {
    &:not(.hljs) {
      display: inline-block;
      padding: 2px;
      font-size: 14px;
      line-height: 1.4;
      background-color: $mono-light-color;
      border-radius: 4px;
    }
  }

  pre {
    display: block;
    width: 100%;
    margin-bottom: 12px;
    font-size: 14px;
    line-height: 1.4;
  }
}
</style>
