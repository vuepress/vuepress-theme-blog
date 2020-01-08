<template>
  <div id="base-list-layout">
    <div class="ui-posts">
      <div v-for="page in pages" :key="page.key" class="ui-post">
        <div class="ui-post-title">
          <NavLink :link="page.path">{{ page.title }}</NavLink>
        </div>

        <p class="ui-post-summary">
          {{ page.frontmatter.summary || page.summary }}
          <!-- <Content :page-key="page.key" slot-key="intro"/>-->
        </p>

        <div v-if="page.frontmatter.author" class="ui-post-author">
          <NavigationIcon />
          <span
            >{{ page.frontmatter.author }} in
            {{ page.frontmatter.location }}</span
          >
        </div>

        <div v-if="page.frontmatter.date" class="ui-post-date">
          <ClockIcon />
          <span>{{ resolvePostDate(page.frontmatter.date) }}</span>
        </div>
      </div>
    </div>

    <component
      :is="paginationComponent"
      v-if="$pagination.length > 1 && paginationComponent"
    ></component>
  </div>
</template>

<script>
/* global THEME_BLOG_PAGINATION_COMPONENT */

import Vue from 'vue'
import dayjs from 'dayjs'
import { NavigationIcon, ClockIcon } from 'vue-feather-icons'
import {
  Pagination,
  SimplePagination,
} from '@vuepress/plugin-blog/lib/client/components'

export default {
  components: { NavigationIcon, ClockIcon },

  data() {
    return {
      paginationComponent: null,
    }
  },

  computed: {
    pages() {
      return this.$pagination.pages
    },
  },

  created() {
    this.paginationComponent = this.getPaginationComponent()
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
    },

    resolvePostDate(date) {
      return dayjs(date).format(
        this.$themeConfig.dateFormat || 'ddd MMM DD YYYY'
      )
    },
  },
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

.ui-post-title
  font-family PT Serif, Serif
  font-size 28px
  border-bottom 0

  a
    cursor pointer
    color #000
    transition all 0.2s
    text-decoration none

    &:hover
      text-decoration underline

.ui-post-summary
  font-size 14px
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
