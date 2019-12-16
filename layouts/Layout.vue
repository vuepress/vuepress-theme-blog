<template>
  <div>
    <BaseListLayout v-if="$pagination"/>
    <Content v-else/>
  </div>
</template>

<script>
  import {initTheme} from '../components/util'

  export default {
    mounted() {
      initTheme()
    }
  }
</script>

<style src="prismjs/themes/prism-okaidia.css"></style>
