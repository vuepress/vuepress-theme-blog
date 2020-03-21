# Palette

We've mentioned `palette.styl` in [Folder structure](../#folder-structure), it should be under the `styles` folder. Its purpose is to override global color settings. With `palette.styl`, you have the ability to modify not only colors but also layout. Here's what you can configure:
```stylus
// colors
$accentColor = lighten(#4a154b, 50%)

$textColor = #2c3e50
$darkTextColor = #000

$borderColor = rgba($darkTextColor,.05)
$darkBorderColor = $darkTextColor

$codeBgColor = $darkTextColor

$bgColor = #fff
$headerBgColor = $bgColor;

$footerBgColor = $darkTextColor
$footerColor = #828282

$newsletterBgColor = #f8f8f8

// layout
$contentWidth = 740px

// responsive breakpoints
$MQNarrow = 959px
$MQMobile = 719px
$MQMobileNarrow = 419px

// code
$lineNumbersWrapperWidth = 3.5rem
$codeLang = js ts html md vue css sass scss less stylus go java c sh yaml py docker dockerfile makefile
```

Reference:
- [palette-styl](https://vuepress.vuejs.org/config/#styling)

:::tip Tip
Another easy approach to modify styles is [index.styl](https://vuepress.vuejs.org/config/#index-styl). The extra styles you add has a higher priority than what this theme provides.
:::
