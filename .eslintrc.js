module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  parser: "vue-eslint-parser",
  extends: [
    'standard',
    'prettier',
    'prettier/standard',
    'plugin:vue/recommended',
  ],
  plugins: ['vue', 'json'],
  rules: {
    // 'prettier/prettier': [
    //   1,
    //   {
    //     printWidth: 80,
    //     tabWidth: 2,
    //     useTabs: false,
    //     semi: false,
    //     singleQuote: true,
    //     trailingComma: 'es5',
    //     bracketSpacing: true,
    //     arrowParens: 'avoid',
    //   },
    // ],
    'block-scoped-var': 'off',
    'complexity': 1,
    'default-case': 1,
    'eol-last': 'off',
    // https://github.com/prettier/eslint-config-prettier#max-len
    // 'max-len': ['error', { code: 80, ignoreTrailingComments: true, ignoreUrls: true }],
    'no-alert': 1,
    'no-console': 1,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 'off',
    'no-eval': 2,
    'no-script-url': 1,
    'no-var': 2,
    'no-void': 2,
    'prefer-const': 1,
    'space-after-keywords': 'off',
    'space-return-throw-case': 'off'
  },
}
