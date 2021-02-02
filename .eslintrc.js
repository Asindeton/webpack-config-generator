module.exports = {
  extends: [
    'airbnb-base',
    'eslint:recommended',
  ],
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  rules: {
    'class-methods-use-this': ['error', { exceptMethods: ['setValue', 'setValueMatrixItemState'] }],
    'no-param-reassign': [2, {
      props: false,
    }],
  },
};
