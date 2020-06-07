module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    'airbnb-base',
    'plugin:prettier/recommended',
    'plugin:vue/recommended',
    'plugin:nuxt/recommended',
    'prettier/vue',
  ],
  plugins: ['prettier', 'vue', 'nuxt'],
  // add your custom rules here
  rules: {
    'no-console': ['error', { allow: ['error'] }],
    'no-debugger': 1,
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    camelcase: [0, { ignoreDestructuring: false }],
    'nuxt/no-cjs-in-config': 'off', // server/index.jsでESmodulesが利用できないため
  },
  settings: {
    'import/core-modules': ['vue', 'vuex'],
    'import/resolver': {
      'babel-module': {
        root: '.',
        alias: {
          '~': '.',
          '@': '.',
          '~~': '.',
          '@@': '.',
        },
      },
    },
  },
};
