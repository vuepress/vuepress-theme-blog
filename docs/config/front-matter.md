# Front Matter

## title

- Type: `string`
- Default: `undefined`
- Required: `true`

The title for the page and content.

e.g.

```markdown
---
title: Hello World
---
```

## tag/tags

- Type: `string|string[]`
- Default: `undefined`
- Required: `false`

The key to classifier pages.

e.g.

```markdown
---
tags: 
  - JavaScript
  - DOM
---
```

## date

- Type: `YYYY-MM-DD`
- Default: `undefined`
- Required: `false`

Our recommended format is `YYYY-MM-DD`, but it actually accepts multi formats. VuePress is using `js-yaml` which follows standard yaml types, so you can find all available formats [here](https://yaml.org/type/timestamp.html).

Date for the post. This will be used for permalink, sorting and displayed in the layout:

![Date](../assets/date.png)

e.g.
```markdown
---
date: 2016-10-20
---
```

## author

- Type: `string`
- Default: `undefined`
- Required: `false`

Author for the post. This will be displayed in the layout:

![Author](../assets/author.png)

e.g.

```markdown
---
author: ULIVZ
---
```

## location

- Type: `string`
- Default: `undefined`
- Required: `false`

Location for the post. This will be displayed in the layout:

![Location](../assets/location.png)

e.g.

```markdown
---
location: Hangzhou
---
```

## summary

- Type: `string`
- Default: `undefined`
- Required: `false`

Summary for the post. This will be displayed in the layout:

![Summary](../assets/summary.png)

e.g.

```markdown
---
summary: Here's a quick post on what I found.
---
```
