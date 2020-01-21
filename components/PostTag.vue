<template>
  <li class="post-tag">
    <router-link :to="'/tag/' + tag"> {{ tag }} </router-link>
  </li>
</template>

<script>
export default {
  name: 'PostTag',
  props: {
    tag: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped lang="stylus">
.post-tag
  background-color $postTagBgColor
  border-radius 3px 0 0 3px
  height 26px
  padding 0 20px 0 23px
  position relative
  cursor pointer

  &:not(:last-child)
    margin-right 10px

  a
    color $postTagColor
    text-decoration none
    transition color 0.2s

  &:before
    position absolute
    left 10px
    top 10px
    background #fff
    border-radius 50%
    box-shadow inset 0 1px rgba(0, 0, 0, 0.25)
    content ''
    height 6px
    width 6px

  &:after
    position absolute
    right 0
    top 0
    background $bgColor
    border-bottom 13px solid transparent
    border-left 10px solid $postTagBgColor
    border-top 13px solid transparent
    content ''

  &:hover
    background-color $accentColor

    &:after
      border-left-color $accentColor

    a
      color #fff
</style>
