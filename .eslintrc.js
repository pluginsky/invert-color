module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'prettier',
    'react-app',
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:jsx-a11y/recommended',
    "plugin:react-hooks/recommended"
  ],
  plugins: ['prettier', '@typescript-eslint', 'jsx-a11y'],
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      module: true,
    },
  },
  rules: { 'no-unused-vars': 'off' },
};
