<template>
  <div id="base-list-layout">
    <div class="ui-posts">
      <div class="ui-post" v-for="page in pages">
        <div class="ui-post-title">
          <NavLink :link="page.path">{{ page.title }}</NavLink>
        </div>
        <div class="ui-post-summary">
          {{ page.frontmatter.summary || page.summary }}
          <!-- <Content :page-key="page.key" slot-key="intro"/>-->
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
    </div>
  
    <component v-if="paginationComponent" :is="paginationComponent"></component>
  </div>
</template>

<script>
  /* global THEME_BLOG_PAGINATION_COMPONENT */
  
  import Toc from '@theme/components/Toc.vue'
  import { NavigationIcon, ClockIcon } from 'vue-feather-icons'
  import { Pagination, SimplePagination } from '@vuepress/plugin-blog/lib/client/components'
  
  console.log(SimplePagination)
  
  export default {
    components: { Toc, Pagination, NavigationIcon, ClockIcon },
    props: ['pagination'],
    data() {
      return {
        paginationComponent: null
      }
    },
    
    created() {
      this.paginationComponent = this.getPaginationComponent()
    },
    
    computed: {
      pages() {
        return this.pagination.pages
      },
    },
    
    methods: {
      getPaginationComponent() {
        const n = THEME_BLOG_PAGINATION_COMPONENT
        if (n === 'Pagination') {
          return Pagination
        }
        if (n === 'SimplePagination') {
          return SimplePagination
        }
        return Vue.component(n) || Pagination
      }
    }
  }
</script>

<style lang="stylus">
  .common-layout
    .content-wrapper
      padding-bottom 80px
  
  .ui-post
    padding-bottom 25px
    margin-bottom 25px
    border-bottom 1px solid #f1f1f1
    &:last-child
      border-bottom 0px
      margin-bottom 0px
  
    p
      margin 0
  
  .ui-post-title
    font-family PT Serif, Serif
    font-size 28px
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
    margin-bottom 15px
    color rgba(0, 0, 0, 0.54)
    font-weight 200
  
  .ui-post-author
    display flex
    align-items center
    font-size 12px
    line-height 12px
    color rgba(0, 0, 0, 0.84)
    margin-bottom 3px
    font-weight 400
    
    svg
      margin-right 5px
      width 14px
      height 14px
  
  .ui-post-date
    display flex
    align-items center
    font-size 12px
    color rgba(0, 0, 0, 0.54)
    font-weight 200
  
    svg
      margin-right 5px
      width 14px
      height 14px

</style>

<style src="prismjs/themes/prism-okaidia.css"></style>


