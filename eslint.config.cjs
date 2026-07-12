const js = require('@eslint/js');
const globals = require('globals');
const tseslint = require('typescript-eslint');

module.exports = tseslint.config(js.configs.recommended, ...tseslint.configs.recommended, {
  files: ['**/*.ts'],
  languageOptions: {
    globals: globals.node,
  },
  rules: {
    'no-console': 'warn',
    'prefer-const': 'error',
    'no-duplicate-imports': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-explicit-any': 'warn',
  },
});
