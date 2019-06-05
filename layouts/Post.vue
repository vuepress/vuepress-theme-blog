<template>
  <div id="vuperess-theme-blog__post-layout">
    <Content class="vuepress-blog-theme-content"/>
    <Toc/>
  </div>
</template>

<script>
  import Toc from '@theme/components/Toc.vue'
  
  export default {
    components: {
      Toc,
    },
  }
</script>

<style lang="stylus">
  .vuepress-blog-theme-content
    font-size 16px
    letter-spacing 0px
    font-family PT Serif
    color #2c3e50
    position relative
    box-shadow: 0 10px 20px rgba(0,0,0,0.05), 0 6px 6px rgba(0,0,0,0.07);
  
</style>

<style src="prismjs/themes/prism-okaidia.css"></style>

