<template>
  <div id="vuperess-theme-blog__global-layout">
    <Header/>
    <MobileHeader :isOpen="isMobileHeaderOpen" @toggle-sidebar="isMobileHeaderOpen = !isMobileHeaderOpen"/>
    <div class="content-wrapper" @click="isMobileHeaderOpen = false">
      <DefaultGlobalLayout/>
    </div>
    <Footer/>
  </div>
</template>

<script>
  import GlobalLayout from '@app/components/GlobalLayout.vue'
  import Header from '@theme/components/Header.vue'
  import MobileHeader from '@theme/components/MobileHeader.vue'
  import Footer from '@theme/components/Footer.vue'
  import {initTheme} from '../components/util'

  export default {
    components: {
      DefaultGlobalLayout: GlobalLayout,
      Header,
      MobileHeader,
      Footer
    },

    data() {
      return {
        isMobileHeaderOpen: false
      }
    },

    mounted() {
      initTheme()
      this.$router.afterEach(() => {
        this.isMobileHeaderOpen = false
      })
    }
  }
</script>


<style lang="css">
  body {
    --background: #fff;
    --code--background: #000;
    --text: #000;
    --text--code: #fff;
    --text--mask: rgba(0, 0, 0, 0.84);
    --text--mask2: rgba(0, 0, 0, 0.54);
    --text--link: #d05dd2;
    --text--link--lighten: #8a278c;
    --title: #2c3e50;
  }
</style>

<style lang="stylus">
  @import "../styles/config.styl"

  #vuperess-theme-blog__global-layout
    background-color var(--background)

  .content-wrapper
    padding 160px 15px 80px 15px
    min-height calc(100vh - 80px - 60px - 160px)
    max-width 740px
    margin 0 auto

  @media (max-width: $MQMobile)
    .content-wrapper
      padding 100px 15px 20px 15px
      min-height calc(100vh - 20px - 60px - 100px)
</style>
