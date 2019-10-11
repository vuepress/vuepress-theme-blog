---
sidebar: auto
---

# @vuepress/theme-blog

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

- Type: `Array<{ text: string, link: string }>`
- Default: `undefined`

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


- Type: `Array<{ type: ContactType, link: string }>`
- Default: `undefined`

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
- instagram
- linkedin

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

A function used to modify the default blog plugin options of [@vuepress/plugin-blog](https://vuepress-plugin-blog.ulivz.com/). It's common to use it to add apply custom [document classifiers](https://vuepress-plugin-blog.ulivz.com/#document-classifier). e.g.

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

**Also see:**

- [Document Classifier](https://vuepress-plugin-blog.ulivz.com/#document-classifier)


### summary

- Type: `boolean`
- Default: `true`

Whether to extract summary from source markdowns.


### summaryLength

- Type: `number`
- Default: `200`

Set the length of summary.


### pwa

- Type: `boolean`
- Default: `false`

Whether to enable PWA support. this option is powered by the [official
PWA plugin](https://v1.vuepress.vuejs.org/plugin/official/plugin-pwa.html).

if you enable this option, the default options of the internal PWA
plugin is as follows:

```js
{
  serviceWorker: true,
  updatePopup: true
}
```

### paginationComponent

- Type: `string`
- Default: `Pagination`

Custom the pagination component.

The default is the 
[pagination component](https://vuepress-plugin-blog.ulivz.com/components/#pagination) powerful by 
[@vuepress/plugin-blog](https://github.com/ulivz/vuepress-plugin-blog):

<img src="./assets/pagination.png" width="250" height="" style=""/>

You can set this option to `SimplePagination` to enable another out-of-box 
[simple pagination component](https://vuepress-plugin-blog.ulivz.com/components/#simplepagination):

<img src="./assets/simple-pagination.png" width="250" height="" style=""/>

You can also wirte a custom pagination component and register it as a global component. then pass its
name to this option.

## Front Matter

### tag/tags

- Type: `string|string[]`
- Default: `200`

e.g.

```markdown
---
tags: 
  - JavaScript
  - DOM
---
```

### date

```markdown
---
date: 2016-10-20 20:44:40
---
```

### author

```markdown
---
author: ULIVZ
---
```

### location

```markdown
---
location: Hangzhou
---
```

### summary

```markdown
---
summary: Here's a quick post on what I found.
---
```
