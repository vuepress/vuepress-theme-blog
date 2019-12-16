<template>
  <div id="vuperess-theme-blog__tags-layout">
    <BlogTags :tags="$frontmatterKey.list"/>
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
