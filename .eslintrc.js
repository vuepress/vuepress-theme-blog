module.exports = {
  root: true,

  env: {
    "node": true
  },

  extends: [
    'plugin:vue/recommended',
    'plugin:prettier/recommended',
    "prettier/vue",
  ],

  rules: {
    'no-undef': ['error'],

    'vue/match-component-file-name': [
      'error',
      {
        extensions: ['js', 'vue'],
        shouldMatchCase: false
      }
    ],

    'vue/prop-name-casing': 0,

    'vue/require-default-prop': 0
  },


}
