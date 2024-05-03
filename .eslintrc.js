module.exports = {
  settings: {
    'import/resolver': {
      node: {
        paths: ['.'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'next',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'react'],
  rules: {
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'no-shadow': 'off',
    'react/jsx-props-no-spreading': 'warn',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    'react/function-component-definition': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    'no-restricted-syntax': 'off',
    'class-methods-use-this': 'off',
    'react/button-has-type': 'warn',
    'react/require-default-props': 'off',
    'import/no-extraneous-dependencies': 'off',
    'global-require': 'warn',
    'react/prop-types': 'warn',
    'default-case': 'warn',
    'object-shorthand': 'warn',
    'no-use-before-define': 'warn',
    'react/jsx-no-constructed-context-values': 'off',
    'consistent-return': 'off',
    'react/no-unstable-nested-components': 'warn',
    'jsx-a11y/heading-has-content': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'jsx-a11y/label-has-associated-control': 'warn',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
};
