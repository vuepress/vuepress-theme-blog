<template>
  <div id="base-list-layout">
    <div class="ui-post" v-for="page in pages">
      <div class="ui-post-title">
        <NavLink :link="page.path">{{ page.title }}</NavLink>
      </div>
      <div class="ui-post-summary">
        <Content :page-key="page.key" slot-key="intro"/>
      </div>
      <div class="ui-post-author" v-if="page.frontmatter.author">
        <NavigationIcon/>
        <span>{{ page.frontmatter.author }} in {{ page.frontmatter.location }}</span>
      </div>
      <div class="ui-post-date" v-if="page.frontmatter.date">
        <ClockIcon/>
        <span>{{ new Date(page.frontmatter.date.trim()).toDateString() }}</span>
      </div>
    </div>
  
    <Pagination :pagination="pagination"/>
  </div>
</template>

<script>
  import Toc from '@theme/components/Toc.vue'
  import Pagination from '@theme/components/Pagination.vue'
  import { NavigationIcon, ClockIcon } from 'vue-feather-icons'
  
  export default {
    components: { Toc, Pagination, NavigationIcon, ClockIcon },
    props: ['pagination'],
    computed: {
      pages() {
        return this.pagination.pages
      }
    },
  }
</script>

<style lang="stylus">
  .common-layout
    .content-wrapper
      padding-bottom 80px
  
  .ui-post
    margin-bottom 50px
    
    p
      margin 0
  
  .ui-post-title
    font-weight bold
    font-size 24px
    border-bottom 0
    
    a
      cursor pointer
      color #000
      transition all .2s
      text-decoration none
      
      &:hover
        text-decoration underline
  
  .ui-post-summary
    font-size 14px
    margin-bottom 10px
    color rgba(0, 0, 0, 0.54)
  
  .ui-post-author
    display flex
    align-items center
    font-size 12px
    line-height 12px
    color rgba(0, 0, 0, 0.84)
    margin-bottom 3px
    
    svg
      margin-right 5px
      width 14px
      height 14px
  
  .ui-post-date
    display flex
    align-items center
    font-size 12px
    color rgba(0, 0, 0, 0.54)
    
    svg
      margin-right 5px
      width 14px
      height 14px

</style>

<style src="prismjs/themes/prism-okaidia.css"></style>


