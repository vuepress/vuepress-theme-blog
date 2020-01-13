const removeMd = require('remove-markdown')
const path = require('path')
const pick = require('lodash/pick')

module.exports = themeConfig => {
  /**
   * Default theme configuration
   */
  themeConfig = Object.assign(themeConfig, {
    nav: themeConfig.nav || [
      {
        text: 'Blog',
        link: '/',
      },
      {
        text: 'Tags',
        link: '/tag/',
      },
    ],
    summary: themeConfig.summary === undefined ? true : themeConfig.summary,
    summaryLength:
      typeof themeConfig.summaryLength === 'number'
        ? themeConfig.summaryLength
        : 200,
    pwa: !!themeConfig.pwa,
  })

  /**
   * Configure blog plugin
   */
  const defaultBlogPluginOptions = {
    directories: [
      {
        id: 'post',
        dirname: '_posts',
        path: '/',
      },
    ],
    frontmatters: [
      {
        id: 'tag',
        keys: ['tag', 'tags'],
        path: '/tag/',
      },
    ],
    globalPagination: {
      lengthPerPage: 5,
    },
  }

  const { modifyBlogPluginOptions } = themeConfig

  let blogPluginOptions

  if (typeof modifyBlogPluginOptions === 'function') {
    blogPluginOptions = modifyBlogPluginOptions(defaultBlogPluginOptions)
  } else {
    const properties = [
      'directories',
      'frontmatters',
      'globalPagination',
      'sitemap',
      'comment',
      'newsletter',
    ]
    blogPluginOptions = Object.assign(
      {},
      defaultBlogPluginOptions,
      pick(themeConfig, properties)
    )
  }

  /**
   * Integrate plugins
   */

  const enableSmoothScroll = themeConfig.smoothScroll === true

  const plugins = [
    '@vuepress/plugin-nprogress',
    ['@vuepress/medium-zoom', true],
    [
      '@vuepress/search',
      {
        searchMaxSuggestions: 10,
      },
    ],
    ['@vuepress/blog', blogPluginOptions],
    ['smooth-scroll', enableSmoothScroll],
  ]

  /**
   * Enable pwa
   */
  if (themeConfig.pwa) {
    plugins.push([
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: true,
      },
    ])
  }

  const config = {
    plugins,
    define: {
      THEME_BLOG_PAGINATION_COMPONENT: themeConfig.paginationComponent
        ? themeConfig.paginationComponent
        : 'Pagination',
    },
    alias: {
      fonts: path.resolve(__dirname, 'fonts'),
    },
  }

  /**
   * Generate summary.
   */
  if (themeConfig.summary) {
    config.extendPageData = function(pageCtx) {
      const strippedContent = pageCtx._strippedContent
      if (!strippedContent) {
        return
      }
      pageCtx.summary =
        removeMd(
          strippedContent
            .trim()
            .replace(/^#+\s+(.*)/, '')
            .slice(0, themeConfig.summaryLength)
        ) + ' ...'
    }
  }

  return config
}
