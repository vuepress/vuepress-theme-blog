<template>
  <div id="mobile-header">
    <div class="mobile-header-bar">
      <div class="mobile-header-title">
        <NavLink
          link="/"
          class="mobile-home-link"
        >{{ $site.title }}
        </NavLink>
        <component :is="isOpen ? 'XIcon' : 'MenuIcon'" @click="$emit('toggle-sidebar')"/>
      </div>
      <div class="mobile-menu-wrapper" v-bind:class="{ open: isOpen }">
        <hr class="menu-divider"/>
        <ul class="mobile-nav" v-if="$themeConfig.nav">
          <li class="mobile-nav-item" v-for="item in $themeConfig.nav">
            <NavLink :link="item.link">{{ item.text }}</NavLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    MenuIcon,
    XIcon
  } from 'vue-feather-icons'

  export default {
    props:{
      isOpen:{
        type: Boolean,
        required: true
      }
    },

    components: {
      MenuIcon,
      XIcon
    },
}
</script>

<style lang="stylus">

  .mobile-header-bar
    z-index 12
    position fixed
    top 0
    width 100vw
    box-sizing border-box
    background-color #fff
    margin auto
    box-shadow 0 5px 20px rgba(0,0,0,0.03), 0 6px 6px rgba(0,0,0,0.05)
    transition all 1s cubic-bezier(0.25, 0.8, 0.25, 1)

  #mobile-header

    .mobile-header-title
      display flex
      align-items center
      justify-content space-between
      padding 1.2em

      .mobile-home-link
        text-decoration none
        text-transform uppercase
        font-family PT Serif, Serif
        color #222
        font-weight bold


  .mobile-nav-item
    list-style none

    a
      text-decoration none

  .menu-divider
    margin 0

  .mobile-menu-wrapper
    max-height 0
    overflow hidden
    transition 0.3s ease
    background-color #fff

  .mobile-menu-wrapper.open
    max-height 450px
    transition 0.3s ease

  @media (min-width: $MQMobile)
    #mobile-header
      display none
</style>
