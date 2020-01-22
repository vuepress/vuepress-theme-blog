---
sidebar: auto
next: /config/
---

# Guide


## Intro

> Default blog theme for VuePress 

You must distinguish between [official blog plugin](https://vuepress-plugin-blog.ulivz.com/) and this theme. Both of them are maintained by [VuePress](https://vuepress.vuejs.org/). We try to implement all the common and necessary blog features in the plugin, and pay more attention to the interactive experience in the theme. So, the plugin might be reused in several blog themes, and this theme is one of them.



## Getting Started from scratch

In this guide, you'll learn how to add default blog theme to a new project manually.

### Installation

```bash
mkdir blog && cd blog # Create an empty directory and go into it

yarn add vuepress @vuepress/theme-blog -D # Install the dependencies
# OR npm install vuepress @vuepress/theme-blog -D
```
### Folder structure

Here's the recommended project structure:
```bash
├── blog
│   ├── _posts
│   │   ├── 2018-11-7-frontmatter-in-vuepress.md #example
│   │   ├── 2019-2-26-markdown-slot.md #example
│   │   └── 2019-5-6-writing-a-vuepress-theme.md #example
│   └── .vuepress
│       ├── `components` _(**Optional**)_
│       ├── `public` _(**Optional**)_
│       ├── `styles` _(**Optional**)_
│       │   ├── index.styl
│       │   └── palette.styl
│       ├── config.js
│       └── `enhanceApp.js` _(**Optional**)_
└── package.json
```

**Required**:

- `blog/.vuepress/config.js`: Entry file of configuration, can also be `yml` or `toml`.
- `blog/_posts`: Stores your post content.

**Optional**:


If you wish to configure the files below, you'll need some knowledge of [VuePress](https://vuepress.vuejs.org/).

- `blog/.vuepress/components`: The Vue components in this directory will be automatically registered as global components.
- `blog/.vuepress/styles`: Stores style related files.
- `blog/.vuepress/styles/index.styl`: Automatically applied global style files, generated at the ending of the CSS file, have a higher priority than the default style.
- `blog/.vuepress/styles/palette.styl`: The palette is used to override the default color constants and to set the color constants of Stylus.
- `blog/.vuepress/public`: Static resource directory.
- `blog/.vuepress/enhanceApp.js`: App level enhancement.


### Using @vuepress/theme-blog

You must add `@vuepress/theme-blog` as a theme in `.vuepress/config.js`. `@vuepress/theme-blog` is configurable, but we will use the defaults for now.

```js
// .vuepress/config.js
module.exports = {
  title: 'VuePress Blog Example', // Title for the site. This will be displayed in the navbar.
  theme: '@vuepress/theme-blog',
  themeConfig: {
    // Please keep looking down to see the available options.
  }
}
```
Add the scripts to package.json file:
```json
// package.json
{
  ...
  "scripts": {
    ...
    "dev": "vuepress dev blog", // starts a development server with automatic reload.
    "build": "vuepress build blog" // builds your website.
  }
  ...
}
```

From now on, you can run `yarn dev` or `npm run dev` and head `localhost:8080` to see your blog!

### Generating content

The `_posts` folder is where your blog posts live. You can simply write blog posts in Markdown.

All blog post files can begin with front matter. Only `title` is required, but we recommend you define all frontmatter variables as below. They'll be used to set the corresponding layout. Check out [frontmatter](config/front-matter) for more details. Here's an example:
```md
---
title: Hello World
date: 2020-01-11
author: Billyyyyy3320
location: Taipei  
---

> This is official blog theme.

My content.
```
You can name your post files anything you like but we recommend including the date at the front.
It helps you organize and will be use as permalink by default. For example:

```
2018-11-7-frontmatter-in-vuepress.md 
2019-2-26-markdown-slot.md 
2019-5-6-writing-a-vuepress-theme.md 
```

### Blog tags

By default, Navigate to `/tag/`, you'll see the tag entry page.
You can set you own tags in front matter, and they'll automatically be classified:

```yaml{4-6}
---
title: Hello World
date: 2020-01-11
tags: 
  - JavaScript
  - Vue
author: Billyyyyy3320
location: Taipei  
---
```

## Quick Start

To make it easier to get started, you can use [create-vuepress](https://github.com/vuepressjs/create-vuepress) which is indeed an npm package, but it doesn’t mean you need to install it manually first. Here's an example:

Step 1: Scaffolding out a VuePress blog
```bash
yarn create vuepress [blogName]

# And answer the following questions in CLI, for instance:

# ? Select the boilerplate type blog

# ? What's the name of your project? blog

# ? What's the description of your project? Billyyyyy3320's personal website

# ? What's your email? newsbielt703@gmail.com

# ? What's your name? Billy Chin

# ? What's the repo of your project. https://github.com/newsbielt703/Billy

cd [blogName] && yarn
```

Step 2: Develop & Build

```bash
# Run localhost
yarn dev

# Build your VP blog
yarn build
```

By default, VuePress dev server is listening at `http://localhost:8080/`, whereas the built files will be in `.vuepress/dist`.

:::warning
Currently, [create-vuepress](https://github.com/vuepressjs/create-vuepress) won't install the latest version of `@vuepress/theme-blog`, you have to update it manually by running `yarn add @vuepress/theme-blog -D`. 

Beware that we have made some breaking changes in v2.0, you also have to make some changes manually. here's the [changelog](https://github.com/vuepressjs/vuepress-theme-blog/releases/tag/v2.0.0).

However, it's still a convenient tool to help you scaffold out a new project with a set of predefined templates.
:::

## Final

Now, Check out your blog at `localhost:8080`, if everything is ok, you might be interested in the following topics:

- Configure this theme: We'll discuss in [the next section](../config)
- Deploy your blog: Read [the deploy section in VuePress documentation](https://vuepress.vuejs.org/guide/deploy.html)
- Explore deeper: 
  - Documentation of [VuePress](https://vuepress.vuejs.org/)
  - Documentation of [official blog plugin](https://vuepress-plugin-blog.ulivz.com/)
