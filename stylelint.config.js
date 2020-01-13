module.exports = {
  plugins: ['stylelint-scss', 'stylelint-prettier'],
  extends: ['stylelint-config-primer', 'stylelint-config-prettier'],
  rules: {
    'prettier/prettier': true,
    indentation: 2,
    'selector-max-type': 10,
  },
  ignoreFiles: [
    'assets/scss/reset.scss',
    'assets/scss/base.scss',
    'assets/scss/variable.scss',
  ],
};
