import marked from 'marked';
import hljs from 'highlightjs';
import hljsDefineVue from 'highlightjs-vue';

// defineVueの実行が遅いため、非同期処理
const defineVue = () => new Promise(resolve => resolve(hljsDefineVue(hljs)));

// defineVueの処理が終わり次第、実行
const initMerked = async () => {
  await defineVue();
  return marked.setOptions({
    langPrefix: 'hljs ',
    highlight(code, lang) {
      return hljs.highlightAuto(code, [lang]).value;
    },
  });
};

export default initMerked;
