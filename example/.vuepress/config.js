module.exports = {
  title: 'VuePress Blog Example',
  description: 'This is a blog example built by VuePress',
  theme: require.resolve('../../'),
  themeConfig: {
    /**
     * Ref: https://vuepress-theme-blog.billyyyyy3320.com/config/#dateformat
     */

    // dateFormat: 'YYYY-MM-DD',

    /**
     * Ref: https://vuepress-theme-blog.billyyyyy3320.com/config/#nav
     */

    // nav: [
    //   {
    //     text: 'Blog',
    //     link: '/',
    //   },
    //   {
    //     text: 'Tags',
    //     link: '/tag/',
    //   },
    //   {
    //     text: 'Location',
    //     link: '/location/',
    //   },
    // ],

    /**
     * Ref: https://vuepress-theme-blog.billyyyyy3320.com/config/#footer
     */
    footer: {
      contact: [
        {
          type: 'codepen',
          link: '/',
        },
        {
          type: 'codesandbox',
          link: '/',
        },
        {
          type: 'facebook',
          link: '/',
        },
        {
          type: 'github',
          link: 'https://github.com/vuepressjs/vuepress-theme-blog',
        },
        {
          type: 'gitlab',
          link: '/',
        },
        {
          type: 'instagram',
          link: '/',
        },
        {
          type: 'linkedin',
          link: '/',
        },
        {
          type: 'mail',
          link: '/',
        },
        {
          type: 'messenger',
          link: '/',
        },
        {
          type:'music',
          link:'/'
        },
        {
          type: 'phone',
          link: '/',
        },
        {
          type: 'twitter',
          link: 'https://twitter.com/vuepressjs',
        },
        {
          type:'video',
          link:'/'
        },
        {
          type: 'web',
          link: '/',
        },
        {
          type: 'youtube',
          link: '/'
        }
      ],
      copyright: [
        {
          text: 'Privacy Policy',
          link: 'https://policies.google.com/privacy?hl=en-US',
        },
        {
          text: 'MIT Licensed | Copyright © 2018-present Vue.js',
        },
      ],
    },
    /**
     * Ref: https://vuepress-theme-blog.billyyyyy3320.com/config/#directories
     */

    // directories:[
    //   {
    //     id: 'post',
    //     dirname: '_posts',
    //     path: '/',
    //     itemPermalink: '/:year/:month/:day/:slug',
    //   },
    //   {
    //     id: 'writing',
    //     dirname: '_writings',
    //     path: '/',
    //     itemPermalink: '/:year/:month/:day/:slug',
    //   },
    // ],

    /**
     * Ref: https://vuepress-theme-blog.billyyyyy3320.com/config/#frontmatters
     */

    // frontmatters: [
    //   {
    //     id: "tag",
    //     keys: ['tag', 'tags'],
    //     path: '/tag/',
    //   },
    //   {
    //     id: "location",
    //     keys: ['location'],
    //     path: '/location/',
    //   },
    // ],

    /**
     * Ref: https://vuepress-theme-blog.billyyyyy3320.com/config/#globalpagination
     */

    // globalPagination: {
    //   lengthPerPage: 10,
    // },

    /**
     * Ref: https://vuepress-theme-blog.billyyyyy3320.com/config/#sitemap
     */
    sitemap: {
      hostname: 'https://example.vuepress-theme-blog.billyyyyy3320.com/'
    },
    /**
     * Ref: https://vuepress-theme-blog.billyyyyy3320.com/config/#comment
     */
    comment: {
      service: 'disqus',
      shortname: 'vuepress-plugin-blog',
    },
    /**
     * Ref: https://vuepress-theme-blog.billyyyyy3320.com/config/#newsletter
     */
    newsletter: {
      endpoint: 'https://billyyyyy3320.us4.list-manage.com/subscribe/post?u=4905113ee00d8210c2004e038&amp;id=bd18d40138'
    },
    /**
     * Ref: https://vuepress-theme-blog.billyyyyy3320.com/config/#feed
     */
    feed: {
      canonical_base: 'https://example.vuepress-theme-blog.billyyyyy3320.com/',
    },

    /**
     * Ref: https://vuepress-theme-blog.billyyyyy3320.com/config/#summary
     */

    // summary:false,

    /**
     * Ref: https://vuepress-theme-blog.billyyyyy3320.com/config/#summarylength
     */

    // summaryLength:100,

    /**
     * Ref: https://vuepress-theme-blog.billyyyyy3320.com/config/#pwa
     */

    // pwa:true,

    /**
     * Ref: https://vuepress-theme-blog.billyyyyy3320.com/config/#paginationcomponent
     */

    // paginationComponent: 'SimplePagination'

    /**
     * Ref: https://vuepress-theme-blog.billyyyyy3320.com/config/#smoothscroll
     */
    smoothScroll: true
  },
}
