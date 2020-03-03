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
    padding: 12px 14px 10px;
    margin: 40px 0 20px;
    font-size: 20px;
    font-weight: bold;
    line-height: 1.4;
    background-color: $primary-light-color;
    border-radius: 4px;
  }

  h3 {
    padding: 6px 16px 8px;
    margin: 40px 0 16px;
    font-size: 18px;
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
      width: 10px;
      height: 10px;
      margin-right: 8px;
      content: '';
      background-color: $primary-color;
    }
  }

  p {
    margin-bottom: 16px;
    font-size: 14px;
    line-height: 2;
  }

  > ul {
    margin-bottom: 16px;

    li {
      position: relative;
      padding-left: 14px;
      font-size: 14px;
      line-height: 2;

      &::before {
        position: absolute;
        top: 12px;
        left: 0;
        width: 6px;
        height: 6px;
        margin-right: 10px;
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
      font-size: 14px;
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
      padding: 0 4px;
      margin: 0 2px;
      font-size: 14px;
      line-height: 20px;
      background-color: #f2f2f2;
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
