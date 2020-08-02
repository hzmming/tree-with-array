module.exports = {
  root: true,
  env: {
    node: true,
    es2020: true,
    jest: true
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 11,
    sourceType: 'module'
  },
  rules: {}
};
