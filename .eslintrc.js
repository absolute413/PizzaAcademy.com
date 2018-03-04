module.exports = {
  parser: 'babel-eslint',
  plugins: ['react', 'prettier'],
  env: {
    browser: true,
    node: true,
    es6: true
  },
  globals: {
    // Gatsby exposes this as a global
    graphql: true,
    // Global Libraries
    google: true,
    $: true
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:prettier/recommended'],
  rules: {
    // ES6
    'no-var': 'error',
    'prefer-const': 'error',
    // 'prefer-template': 'error',
    // 'object-shorthand': 'error',
    // 'prefer-destructuring': 'error',
    'prefer-arrow-callback': 'error',

    // Override
    'no-empty': ['warn', { allowEmptyCatch: true }],
    'no-unused-vars': ['warn', { ignoreRestSiblings: true }],
    'react/prop-types': ['warn', { skipUndeclared: true }],

    // Disable
    'no-console': 'off',
    'react/display-name': 'off',
    'react/no-unescaped-entities': 'off'
  }
}
