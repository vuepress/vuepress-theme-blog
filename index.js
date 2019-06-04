module.exports = (themeConfig, ctx) => {
  const defaultBlogPluginOptions = {
    directories: [
      {
        id: 'post',
        dirname: '_posts',
        path: '/',
        layout: 'IndexPost',
        itemLayout: 'Post',
        itemPermalink: '/:year/:month/:day/:slug',
        pagination: {
          perPagePosts: 5,
        },
      },
      {
        id: 'archive',
        dirname: '_archive',
        path: '/archive/',
        layout: 'IndexArchive',
        itemLayout: 'Post',
        itemPermalink: '/archive/:year/:month/:day/:slug',
        pagination: {
          perPagePosts: 5,
        },
      },
    ],
    frontmatters: [
      {
        id: "tag",
        keys: ['tag', 'tags'],
        path: '/tag/',
        layout: 'Tags',
        frontmatter: { title: 'Tags' },
        itemlayout: 'Tag',
        pagination: {
          perPagePosts: 5
        }
      },
    ]
  }

  const { modifyBlogPluginOptions } = themeConfig

  const blogPluginOptions = typeof modifyBlogPluginOptions === 'function'
    ? modifyBlogPluginOptions(defaultBlogPluginOptions)
    : themeConfig

  return {
    plugins: [
      '@vuepress/plugin-nprogress',
      ['@vuepress/medium-zoom', true],
      ['@vuepress/search', {
        searchMaxSuggestions: 10
      }],
      ['@vuepress/pwa', {
        serviceWorker: true,
        updatePopup: true
      }],
      [
        '@vuepress/blog',
        blogPluginOptions,
      ],
    ],
  }
}
