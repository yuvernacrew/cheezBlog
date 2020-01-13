module.exports = {
  plugins: ['stylelint-scss', 'stylelint-prettier'],
  extends: ['stylelint-config-primer', 'stylelint-config-prettier'],
  rules: {
    'prettier/prettier': true,
    indentation: 2,
    'selector-max-type': 10,
    'max-nesting-depth': 5,
    'font-family-name-quotes': 'always-unless-keyword',
  },
  ignoreFiles: [
    'assets/scss/reset.scss',
    'assets/scss/base.scss',
    'assets/scss/variable.scss',
  ],
};
