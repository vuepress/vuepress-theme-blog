---
sidebar: auto
---

# @vuepress/plugin-blog

> Default blog theme for VuePress 

## Install

```bash
yarn add @vuepress/theme-blog -D
# OR npm install @vuepress/theme-blog -D
```

## Usage

```js
// .vuepress/config.js
module.exports = {
  theme: '@vuepress/blog',
  themeConfig: {
    // Please keep looking down to see the available options.
  }
}
```

## Options

### nav

- 类型: `Array<{ text: string, link: string }>`
- 默认值: `undefined`

e.g.

```js
module.exports = {
  themeConfig: {
    nav: [
      {
        text: 'Home',
        link: '/',
      },
      {
        text: 'Archive',
        link: '/archive/',
      },
      {
        text: 'Tags',
        link: '/tag/',
      },
    ],
  },
}
```

### footer

#### footer.contact


- 类型: `Array<{ type: ContactType, link: string }>`
- 默认值: `undefined`

Contact information, displayed on the left side of footer.

```js
module.exports = {
  themeConfig: {
    footer: {
      contact: [
        {
          type: 'github',
          link: 'https://github.com/vuejs/vuepress',
        },
        {
          type: 'twitter',
          link: 'https://github.com/vuejs/vuepress',
        },
      ],
    },
  },
}
```

For now `ContactType` supports following enums:

- github
- facebook
- twitter

::: tip
Welcome contribution of adding more built-in contact type.
:::

#### footer.copyright

Copyright information, displayed on the right side of footer.

```js
module.exports = {
  themeConfig: {
    footer: {
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
  },
}
```

### modifyBlogPluginOptions

A function used to modify the default blog plugin options. It's common to used it to add custom classifiers. e.g.

```js
module.exports = {
  themeConfig: {
    modifyBlogPluginOptions(blogPlugnOptions) {
      const writingDirectoryClassifier = {
        id: 'writing',
        dirname: '_writings',
        path: '/writings/',
        layout: 'IndexWriting',
        itemLayout: 'Writing',
        itemPermalink: '/writings/:year/:month/:day/:slug',
        pagination: {
          perPagePosts: 5,
        },
      }
      
      blogPlugnOptions.directories.push(writingDirectoryClassifier)
      return blogPlugnOptions
    },
  },
}
```

Here is the default blog plugin options:

```js
{
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
```

