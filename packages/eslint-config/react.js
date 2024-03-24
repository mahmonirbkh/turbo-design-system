const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");


module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      typescript: {
        project,
      },
      node: true,
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:storybook/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
  ],
  ignorePatterns: ['dist/', '.eslintrc.cjs', "node_modules/", ".eslintrc.js", "**/*.css"],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    "unicorn/filename-case": "off",
    "import/no-default-export": "off",
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    '@typescript-eslint/no-explicit-any': 'off',
    'import/default': 'off',
    'import/export': 'off',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
      },
    ],
    'import/no-unresolved': [
      'error',
      {
        ignore: ['.svg'],
      },
    ],
  },
};
