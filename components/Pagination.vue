<template>
  <div
    class="pagination"
    v-if="pagination"
  >
    <router-link
      class="prev"
      title="上一页"
      v-if="pagination.hasPrev"
      :to="pagination.prevLink"
    >
      上一页
    </router-link>
    <router-link
      class="next"
      title="下一页"
      v-if="pagination.hasNext"
      :to="pagination.nextLink"
    >
      下一页
    </router-link>
  </div>
</template>

<script>
  export default {
    props: ['pagination']
  }
</script>

<style lang="stylus">
  .pagination
    a
      margin-right: 20px
      color: #000
      height: 38px
      line-height: 38px
      transition: all .3s ease
      position: relative
      overflow: hidden
      display: inline-block
      background #FFF
      padding: 0 15px
      text-decoration: none
      border 1px solid #000
      border-radius 5px
      transition all .5s
      &:hover
        color #FFF
        border 1px solid $accentColor
        background-color $accentColor
</style>
