---
prev: /
---
# Options

## dateFormat

- Type: `string`
- Default: 'ddd MMM DD YYYY'

The [date](./front-matter.md#date) will be displayed in the layout with this format.
You can find all available formats [here](https://github.com/iamkun/dayjs/blob/dev/docs/en/API-reference.md#displaying)

e.g.

```js
module.exports = {
  themeConfig: {
    dateFormat: 'YYYY-MM-DD'
  }
}
```

## nav

- Type: `Array<{ text: string, link: string }>`
- Default: `See below`

Links you wish to be displayed at navbar.

Here's the default:

```js
module.exports = {
  themeConfig: {
    nav: [
      {
        text: 'Blog',
        link: '/',
      },
      {
        text: 'Tags',
        link: '/tag/',
      },
    ]
  },
}
```

## footer

### footer.contact


- Type: `Array<{ type: ContactType, link: string }>`
- Default: `undefined`

Contact information, displayed on the left side of footer.

e.g.
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

- facebook
- github
- gitlab
- instagram
- linkedin
- mail
- messenger
- phone
- twitter
- web
- codepen

::: tip
Welcome contribution of adding more built-in contact type.
:::

### footer.copyright

Copyright information, displayed on the right side of footer.

e.g.
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

## modifyBlogPluginOptions

A function used to modify the default blog plugin options of [@vuepress/plugin-blog](https://vuepress-plugin-blog.ulivz.com/).

Here's the default blog plugin options:

```js
{
  directories: [
    {
      id: 'post',
      dirname: '_posts',
      path: '/',
      // layout: 'IndexPost', defaults to `Layout.vue`
      itemLayout: 'Post',
      itemPermalink: '/:year/:month/:day/:slug',
      pagination: {
        lengthPerPage: 5,
      },
    },
  ],
  frontmatters: [
    {
      id: "tag",
      keys: ['tag', 'tags'],
      path: '/tag/',
      // layout: 'Tag',  defaults to `FrontmatterKey.vue`
      frontmatter: { title: 'Tag' },
      pagination: {
        lengthPerPage: 5
      }
    },
  ]
}
```


Adding apply custom [document classifiers](https://vuepress-plugin-blog.ulivz.com/guide/getting-started.html#document-classifier):

```js
module.exports = {
  themeConfig: {
    modifyBlogPluginOptions(blogPluginOptions) {
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
      
      blogPluginOptions.directories.push(writingDirectoryClassifier)
      return blogPluginOptions
    },
  },
}
```

Enabling powerful features such as, comment, sitemap and newsletter:
```js
module.exports = {
  themeConfig: {
    modifyBlogPluginOptions(blogPluginOptions) {
      const sitemap = {
        hostname: 'https://yourdomain'
      }

      const comment = {
        service: 'disqus',
        shortname: 'disqus-shortname',
        // service: 'vssue',
        // owner: 'You',
        // repo: 'Your repo',
        // clientId: 'Your clientId',
        // clientSecret: 'Your clientSecret',
      }

      const newsletter = {
        endpoint:'https://billyyyyy3320.us4.list-manage.com/subscribe/post?u=4905113ee00d8210c2004e038&amp;id=bd18d40138'
      }

      return { ...blogPluginOptions, sitemap, comment, newsletter }
    },
  },
}
```

Since many features are powered by the plugin, we suggest you to read the [documentation](https://vuepress-plugin-blog.ulivz.com/).


## summary

- Type: `boolean`
- Default: `true`

Whether to extract summary from source markdowns. You can write summary manually by [front matter](./front-matter.md#summary).


## summaryLength

- Type: `number`
- Default: `200`

Set the length of summary.


## pwa

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

## paginationComponent

- Type: `string`
- Default: `Pagination`

Custom the pagination component.

The default is the 
[pagination component](https://vuepress-plugin-blog.ulivz.com/components/#pagination) powerful by 
[@vuepress/plugin-blog](https://github.com/ulivz/vuepress-plugin-blog):

<img src="../assets/pagination.png" width="250" height="" style=""/>

You can set this option to `SimplePagination` to enable another out-of-box 
[simple pagination component](https://vuepress-plugin-blog.ulivz.com/components/#simplepagination):

<img src="../assets/simple-pagination.png" width="250" height="" style=""/>

You can also wirte a custom pagination component and register it as a global component. then pass its
name to this option.

