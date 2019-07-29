module.exports = {
  title: 'VuePress Blog Example',
  description: 'This is a blog example built by VuePress',
  theme: require.resolve('../../'),
  themeConfig: {
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#nav
     */
    nav: [
      {
        text: 'Blog',
        link: '/',
      },
      {
        text: 'Tags',
        link: '/tag/',
      },
      {
        text: 'About',
        link: '/about/',
      },
    ],
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#footer
     */
    footer: {
      contact: [
        {
          type: 'github',
          link: 'https://github.com/ulivz',
        },
        {
          type: 'instagram',
          link: '#',
        },
        {
          type: 'linkedin',
          link: '#',
        },
        {
          type: 'twitter',
          link: 'https://twitter.com/_ulivz',
        },
      ],
      copyright: [
        {
          text: 'Privacy Policy',
          link: 'https://policies.google.com/privacy?hl=en-US',
        },
        {
          text: 'MIT Licensed | Copyright © 2018-present Vue.js',
          link: '',
        },
      ],
    },

    // paginationComponent: 'SimplePagination'
  },
}
