module.exports = {
  title: '@vuepress/theme-blog',
  description: 'Official blog theme for VuePress',
  themeConfig: {
    repo: 'vuepressjs/vuepress-theme-blog',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: 'Edit this page on GitHub',
    nav: [
      { text: 'Guide', link: '/' },
      { text: 'Config', link: '/config/' },
    ],
    sidebarDepth: 3,
    sidebar: {
      '/config/': [
        '',
        'front-matter',
        'palette'
      ],
    },
    smoothScroll: true,
  },
}

