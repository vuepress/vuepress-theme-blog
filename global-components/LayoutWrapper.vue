<template>
  <div>
    <Header/>
    
    <div class="content-wrapper">
      <slot/>
    </div>
    
    <Footer/>
  </div>
</template>

<script>
import Header from '@theme/components/Header'
import Footer from '@theme/components/Footer'

export default {
  components: { Header, Footer }
}
</script>

<style lang="stylus">
.content-wrapper
  padding-top 160px
  min-height calc(100vh - 80px - 60px)
  max-width 740px
  padding-left 20vw
</style>
