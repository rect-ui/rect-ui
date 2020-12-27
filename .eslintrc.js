module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    // 'airbnb',
    // "airbnb/hooks",
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      globalReturn: false,
      impliedStrict: true,
      jsx: true,
      // experimental
      experimentalObjectRestSpread: false,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  overrides: [],
  rules: {
    // 'semi': 0,
    // 'no-use-before-define': 0,
    // 'no-extra-semi': 1,
    // 'react/jsx-filename-extension': [1, { extensions: ['.jsx', '.tsx'] }],
    // 'import/extensions': 0,
    // 'import/no-unresolved': 0,
    // 'import/no-extraneous-dependencies': 0,
  },
};
