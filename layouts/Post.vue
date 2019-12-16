<template>
  <div id="vuperess-theme-blog__post-layout">
    <div class="vuepress-blog-theme-content">
      <Content/>
      <hr/>
      <Comment/>
    </div>
    <Toc/>
  </div>
</template>

<script>
  import Toc from '@theme/components/Toc.vue'
  import {Comment} from '@vuepress/plugin-blog/lib/client/components'
  import {initTheme} from '../components/util'

  export default {
    components: {
      Toc,
      Comment
    },

    mounted() {
      initTheme()
    }
  }
</script>

<style lang="stylus">
  @require '../styles/wrapper.styl';

  .vuepress-blog-theme-content
    @extend $wrapper
    font-size 16px
    letter-spacing 0px
    font-family PT Serif, Serif
    color var(--text)
    background-color var(--background)
    position relative

    @media (min-width: $MQNarrow)
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05), 0 6px 6px rgba(0, 0, 0, 0.07)

</style>

<style src="prismjs/themes/prism-okaidia.css"></style>

