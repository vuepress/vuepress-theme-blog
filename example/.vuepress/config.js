module.exports = {
  title: 'VuePress Blog Example',
  description: 'This is a blog example built by VuePress',
  theme: require.resolve('../../'),
  themeConfig: {
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#dateFormat
     */

    // dateFormat: 'YYYY-MM-DD',

    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#nav
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
     * Ref: https://vuepress-theme-blog.ulivz.com/#footer
     */
    footer: {
      contact: [
        {
          type: 'codepen',
          link: '#',
        },
        {
          type: 'facebook',
          link: '#',
        },
        {
          type: 'github',
          link: 'https://github.com/ulivz',
        },
        {
          type: 'gitlab',
          link: '#',
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
          type: 'mail',
          link: '#',
        },
        {
          type: 'messenger',
          link: '#',
        },
        {
          type: 'phone',
          link: '#',
        },
        {
          type: 'twitter',
          link: 'https://twitter.com/_ulivz',
        },
        {
          type: 'web',
          link: '#',
        }
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
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#directories
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
     * Ref: https://vuepress-theme-blog.ulivz.com/#frontmatters
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
     * Ref: https://vuepress-theme-blog.ulivz.com/#globalPagination
     */

    // globalPagination: {
    //   lengthPerPage: 10,
    // },

    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#sitemap
     */
    sitemap: {
      hostname: 'https://yourdomain'
    },
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#comment
     */
    comment: {
      service: 'disqus',
      shortname: 'vuepress-plugin-blog',
    },
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#newsletter
     */
    newsletter: {
      endpoint: 'https://billyyyyy3320.us4.list-manage.com/subscribe/post?u=4905113ee00d8210c2004e038&amp;id=bd18d40138'
    },
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#modifyblogpluginoptions
     */

    // modifyBlogPluginOptions (blogPluginOptions) {
    //   const sitemap = {
    //     hostname: 'https://yourdomain'
    //   }

    //   const comment = {
    //     service: 'disqus',
    //     shortname: 'vuepress-plugin-blog',
    //   }

    //   const newsletter = {
    //     endpoint:'https://billyyyyy3320.us4.list-manage.com/subscribe/post?u=4905113ee00d8210c2004e038&amp;id=bd18d40138'
    //   }

    //   return { ...blogPluginOptions, sitemap, comment, newsletter }
    // },

    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#summary
     */

    summary:false,

    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#summarylength
     */

    // summaryLength:100,

    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#pwa
     */

    // pwa:true,

    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#paginationcomponent
     */

    // paginationComponent: 'SimplePagination'

    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#smoothscroll
     */
    smoothScroll:true
  },
}
