<template>
  <ToggleButton
    :labels="{ checked: 'Dark', unchecked: 'Light' }"
    :value="this.defaultValue"
    :width="55"
    @change="onChange"
    color="#8a278c"
  />
</template>

<script>
  import {ToggleButton} from 'vue-js-toggle-button'
  import {darkThemeKey, darkTheme} from './util'

  export default {
    components: {ToggleButton},
    data() {
      return {
        defaultValue: false
      }
    },
    created() {
      this.defaultValue = window.localStorage.getItem(darkThemeKey) === 'true' || false
    },
    methods: {
      onChange({value}) {
        window.localStorage.setItem(darkThemeKey, value)
        this.setTheme(value)
      },

      setTheme(isDark) {
        const style = window.document.body.style
        Object.keys(darkTheme).forEach(key => {
          isDark && style.setProperty(`--${key}`, darkTheme[key])
          !isDark && style.removeProperty(`--${key}`)
        })
      }
    }
  }
</script>

<style scoped>

</style>
