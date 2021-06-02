module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  plugins: ['@typescript-eslint', 'import'],
  ignorePatterns: ['*.cjs'],
  overrides: [{ files: ['*.*'], rules: { 'no-prototype-builtins': 'off' } }],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2019,
  },
  env: {
    es2017: true,
    node: true,
  },
};
