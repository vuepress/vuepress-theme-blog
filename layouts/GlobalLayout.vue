<template>
  <div id="vuperess-theme-blog__global-layout">
    <Header/>
    <div class="content-wrapper">
      <DefaultGlobalLayout/>
    </div>
    <Footer/>
  </div>
</template>

<script>
  import GlobalLayout from '@app/components/GlobalLayout.vue'
  import Header from '@theme/components/Header.vue'
  import Footer from '@theme/components/Header.vue'
  
  export default {
    components: {
      DefaultGlobalLayout: GlobalLayout,
      Header,
      Footer,
    },
  }
</script>

<style lang="stylus">
  .content-wrapper
    padding-top 160px
    min-height calc(100vh - 80px - 60px)
    max-width 740px
    padding-left 20vw
</style>
