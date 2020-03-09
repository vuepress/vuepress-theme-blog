# [2.2.0](https://github.com/ulivz/vuepress-theme-blog/compare/v2.1.0...v2.2.0) (2020-03-09)


### Bug Fixes

* wrap overflow contact types ([12bfe80](https://github.com/ulivz/vuepress-theme-blog/commit/12bfe803b3f66b1e5ed8f28f8eb8846f4fab8b03))


### Features

* add several contact types (close [#69](https://github.com/ulivz/vuepress-theme-blog/issues/69))([#72](https://github.com/ulivz/vuepress-theme-blog/issues/72)) ([323e0bf](https://github.com/ulivz/vuepress-theme-blog/commit/323e0bfaebbafb6f4dfbb4e7fe3d5be095b5505d))
* choose FOUT over FOIT ([#71](https://github.com/ulivz/vuepress-theme-blog/issues/71)) ([a9c6cd5](https://github.com/ulivz/vuepress-theme-blog/commit/a9c6cd5776338eec8981672ee434f63340dd5663))



# [2.1.0](https://github.com/ulivz/vuepress-theme-blog/compare/v2.0.3...v2.1.0) (2020-02-12)


### Features

* add microdatas ([#64](https://github.com/ulivz/vuepress-theme-blog/issues/64)) ([2bdb39b](https://github.com/ulivz/vuepress-theme-blog/commit/2bdb39b27cec2ffd89e2bf7469fd322cce90fd73))



## [2.0.3](https://github.com/ulivz/vuepress-theme-blog/compare/v2.0.2...v2.0.3) (2020-01-27)


### Bug Fixes

* section links should not be covered by navbar (fix [#60](https://github.com/ulivz/vuepress-theme-blog/issues/60))([#61](https://github.com/ulivz/vuepress-theme-blog/issues/61)) ([89b08b6](https://github.com/ulivz/vuepress-theme-blog/commit/89b08b6117d8ffcc4dc60bae4f703515516fe55b))



## [2.0.2](https://github.com/ulivz/vuepress-theme-blog/compare/v2.0.1...v2.0.2) (2020-01-25)


### Bug Fixes

* web feed link should be absolute path ([#59](https://github.com/ulivz/vuepress-theme-blog/issues/59)) ([577477a](https://github.com/ulivz/vuepress-theme-blog/commit/577477af485b87a7ad5f5f8bdad2b14490af7d56))



## [2.0.1](https://github.com/ulivz/vuepress-theme-blog/compare/v2.0.0...v2.0.1) (2020-01-25)


### Bug Fixes

* `location` shouldn't be required when setting `author` in front matter ([#58](https://github.com/ulivz/vuepress-theme-blog/issues/58)) ([654a971](https://github.com/ulivz/vuepress-theme-blog/commit/654a971e7363cfaf013aa7c666b55377a0a5e843))
* too much padding at top of page ([c0bc780](https://github.com/ulivz/vuepress-theme-blog/commit/c0bc7801f51e050a1af0548831992d72f0d1d9a2))



# [2.0.0](https://github.com/ulivz/vuepress-theme-blog/compare/v1.7.1...v2.0.0) (2020-01-22)


### Bug Fixes

* text overflow on mobile ([#56](https://github.com/ulivz/vuepress-theme-blog/issues/56)) ([2e96314](https://github.com/ulivz/vuepress-theme-blog/commit/2e9631403b2298ccd385764b6ee4df2169c28a50))


### Features

* deprecate modifyBlogPluginOptions ([#57](https://github.com/ulivz/vuepress-theme-blog/issues/57)) ([ad5c100](https://github.com/ulivz/vuepress-theme-blog/commit/ad5c100803d71499947be8b158bf792d29e1261c))
* display post meta (close [#32](https://github.com/ulivz/vuepress-theme-blog/issues/32))([#52](https://github.com/ulivz/vuepress-theme-blog/issues/52)) ([a689ada](https://github.com/ulivz/vuepress-theme-blog/commit/a689adaa16087912c2c8bc073d84626cdf6af272))
* generate content title from frontmatter ([#51](https://github.com/ulivz/vuepress-theme-blog/issues/51)) ([50abb08](https://github.com/ulivz/vuepress-theme-blog/commit/50abb089026b9495bbe1761cd2ab3e8796680b1c))


### BREAKING CHANGES

* Turn default frontmatter key to tags instead of tag/tags
* Require title in front matter
* Deprecate `modifyBlogPluginOptions`



## [1.7.1](https://github.com/ulivz/vuepress-theme-blog/compare/v1.7.0...v1.7.1) (2020-01-19)


### Bug Fixes

* feed doesn't work fine when useing non-default directory name ([27405f8](https://github.com/ulivz/vuepress-theme-blog/commit/27405f872aaceb480e687dd4de043cd4b3dbe458))
* remove mixed support & un-used css ([2bf23dd](https://github.com/ulivz/vuepress-theme-blog/commit/2bf23dd021463679a79ccaffe6d9c613bf3fd52b))



## [1.7.1](https://github.com/ulivz/vuepress-theme-blog/compare/v1.7.0...v1.7.1) (2020-01-19)


### Bug Fixes

* feed doesn't work fine when useing non-default directory name ([27405f8](https://github.com/ulivz/vuepress-theme-blog/commit/27405f872aaceb480e687dd4de043cd4b3dbe458))
* remove mixed support & un-used css ([2bf23dd](https://github.com/ulivz/vuepress-theme-blog/commit/2bf23dd021463679a79ccaffe6d9c613bf3fd52b))



# [1.7.0](https://github.com/ulivz/vuepress-theme-blog/compare/v1.6.0...v1.7.0) (2020-01-17)


### Features

* enhance palette.stly (close [#44](https://github.com/ulivz/vuepress-theme-blog/issues/44)) ([3de1e63](https://github.com/ulivz/vuepress-theme-blog/commit/3de1e635c06f239a1da0f7b251f26f80cb4c3bdc))
* improve mobile navbar ([#53](https://github.com/ulivz/vuepress-theme-blog/issues/53)) ([d6746ee](https://github.com/ulivz/vuepress-theme-blog/commit/d6746ee5ab167b683485eaee1e6096d3e3d4d0dc))
* support RSS, Atom and JSON feed ([#54](https://github.com/ulivz/vuepress-theme-blog/issues/54)) ([b45d6a5](https://github.com/ulivz/vuepress-theme-blog/commit/b45d6a5ac7187329e809f6a9b4d7fdec7bf12f5e))
* use summary as meta description ([9626ab8](https://github.com/ulivz/vuepress-theme-blog/commit/9626ab8dda63b3ec49a1ce6a8d4dcb995f132051))



# [1.6.0](https://github.com/ulivz/vuepress-theme-blog/compare/v1.5.1...v1.6.0) (2020-01-13)


### Bug Fixes

* fonts are inaccessible (fix [#40](https://github.com/ulivz/vuepress-theme-blog/issues/40))([#47](https://github.com/ulivz/vuepress-theme-blog/issues/47)) ([dd6bb0d](https://github.com/ulivz/vuepress-theme-blog/commit/dd6bb0d0ad1c2b4589e4f15dcc50bd03fa1e73bf))
* sorter doesn't work fine when writing date in 2-digits ([3c6a68f](https://github.com/ulivz/vuepress-theme-blog/commit/3c6a68fa872f8ac1a9dffe6756113b198b9eaaa7))


### Features

* smooth scroll ([#49](https://github.com/ulivz/vuepress-theme-blog/issues/49)) ([16a7816](https://github.com/ulivz/vuepress-theme-blog/commit/16a78160766c84edf2aecc435c29c103b3b97e6a))
* spread out blog plugin options to theme options (close [#34](https://github.com/ulivz/vuepress-theme-blog/issues/34)) ([#48](https://github.com/ulivz/vuepress-theme-blog/issues/48)) ([d6bfae3](https://github.com/ulivz/vuepress-theme-blog/commit/d6bfae369d3a8ae3754786015527ce962dfa7f00))



## [1.5.1](https://github.com/ulivz/vuepress-theme-blog/compare/v1.5.0...v1.5.1) (2020-01-11)


### Features

* bump blog plugin ([2d6269c](https://github.com/ulivz/vuepress-theme-blog/commit/2d6269cccbf13cdb7bb22fe3028ea8faa673490a))
* set up defualt nav ([#42](https://github.com/ulivz/vuepress-theme-blog/issues/42)) ([582d5fb](https://github.com/ulivz/vuepress-theme-blog/commit/582d5fbc6924ddef10bc6b64fc53090967978ddf))



# [1.5.0](https://github.com/ulivz/vuepress-theme-blog/compare/v1.4.0...v1.5.0) (2020-01-08)


### Bug Fixes

* disable newsletter casuing crash ([#36](https://github.com/ulivz/vuepress-theme-blog/issues/36)) ([3cddcc8](https://github.com/ulivz/vuepress-theme-blog/commit/3cddcc83940400472205a27307a57df9778f34d0))
* highlighted lines were not highlighted ([#37](https://github.com/ulivz/vuepress-theme-blog/issues/37)) ([377be90](https://github.com/ulivz/vuepress-theme-blog/commit/377be90c2fd35dd7a20e091518aa8565c3c8101d))
* resolve overflowing footer in mobile ([1412c9b](https://github.com/ulivz/vuepress-theme-blog/commit/1412c9bdbf8788e5bc8ae59ed9767d3899a7a2f3))
* the spacing of summary is too narrow ([ce810ff](https://github.com/ulivz/vuepress-theme-blog/commit/ce810ff2ceb9971cc3c45ba4d78efb6307ee4ec9))


### Features

* support for custom dates (close [#25](https://github.com/ulivz/vuepress-theme-blog/issues/25))([#28](https://github.com/ulivz/vuepress-theme-blog/issues/28)) ([6c387bd](https://github.com/ulivz/vuepress-theme-blog/commit/6c387bd3d963dd89570456b2e1ca03301fe30ec3))



# [1.4.0](https://github.com/ulivz/vuepress-theme-blog/compare/v1.3.3...v1.4.0) (2019-12-28)


### Features

* add contact type 'codepen' ([#30](https://github.com/ulivz/vuepress-theme-blog/issues/30)) ([2419317](https://github.com/ulivz/vuepress-theme-blog/commit/24193173650bc6b5eb7098480ec63f0162ee5962))
* support newsletter ([#33](https://github.com/ulivz/vuepress-theme-blog/issues/33)) ([88246ed](https://github.com/ulivz/vuepress-theme-blog/commit/88246edd1fe0ee67a0cc3a3c91bda51b7f67d451))



## [1.3.3](https://github.com/ulivz/vuepress-theme-blog/compare/v1.3.2...v1.3.3) (2019-11-23)


### Features

* add several contact types ([8f5d015](https://github.com/ulivz/vuepress-theme-blog/commit/8f5d015cefc4e91049a33414b7577e7eb9544a3c))



## [1.3.2](https://github.com/ulivz/vuepress-theme-blog/compare/v1.3.1...v1.3.2) (2019-10-20)


### Features

* support passing comment props via frontmatter ([815faf4](https://github.com/ulivz/vuepress-theme-blog/commit/815faf477cd21ada70da5c7e7aedaabe56d06879))



## [1.3.1](https://github.com/ulivz/vuepress-theme-blog/compare/v1.3.0...v1.3.1) (2019-10-16)


### Bug Fixes

* fix broken content layout ([553dcf4](https://github.com/ulivz/vuepress-theme-blog/commit/553dcf48622e6ea87e97f2ad38144634183067c2))



# [1.3.0](https://github.com/ulivz/vuepress-theme-blog/compare/v1.2.6...v1.3.0) (2019-10-15)


### Features

* support sitemap and commenting ([9690689](https://github.com/ulivz/vuepress-theme-blog/commit/9690689595e4e635492ad96c393781b661d3a7fb))



## [1.2.6](https://github.com/ulivz/vuepress-theme-blog/compare/v1.2.5...v1.2.6) (2019-10-11)


### Bug Fixes

* solve invalid date on Safari ([b29c1b6](https://github.com/ulivz/vuepress-theme-blog/commit/b29c1b62a89b1a79ac2e1bfafb677496a5c7ea66))
* summary default should be true ([46e503c](https://github.com/ulivz/vuepress-theme-blog/commit/46e503cd7d200e7982bc6d4e98c20feb69759cb2))


## [1.2.5](https://github.com/ulivz/vuepress-theme-blog/compare/v1.2.4...v1.2.5) (2019-09-10)


### Bug Fixes

* remove excess space in mobile side ([c4cc56e](https://github.com/ulivz/vuepress-theme-blog/commit/c4cc56e))


### Features

* bump blog plugin to v1.2.5 ([96b16b9](https://github.com/ulivz/vuepress-theme-blog/commit/96b16b9))
* close mobile menu after clicking on content ([78453bc](https://github.com/ulivz/vuepress-theme-blog/commit/78453bc))
* close mobile menu after navigation ([266b0d5](https://github.com/ulivz/vuepress-theme-blog/commit/266b0d5))



## [1.2.4](https://github.com/ulivz/vuepress-theme-blog/compare/v1.2.3...v1.2.4) (2019-09-09)


### Bug Fixes

* base url in header ([#9](https://github.com/ulivz/vuepress-theme-blog/issues/9)) ([0d70cd4](https://github.com/ulivz/vuepress-theme-blog/commit/0d70cd4))
* config for summary, summaryLength and pwa (close: [#13](https://github.com/ulivz/vuepress-theme-blog/issues/13))([#14](https://github.com/ulivz/vuepress-theme-blog/issues/14)) ([7d40fe3](https://github.com/ulivz/vuepress-theme-blog/commit/7d40fe3))
* prevent nav from breaking into next line ([#17](https://github.com/ulivz/vuepress-theme-blog/issues/17)) ([377c706](https://github.com/ulivz/vuepress-theme-blog/commit/377c706))



## [1.2.3](https://github.com/ulivz/vuepress-theme-blog/compare/v1.2.2...v1.2.3) (2019-07-29)


### Bug Fixes

* <Toc /> component can not display normally (close: [#7](https://github.com/ulivz/vuepress-theme-blog/issues/7))([#11](https://github.com/ulivz/vuepress-theme-blog/issues/11)) ([7d1cc3d](https://github.com/ulivz/vuepress-theme-blog/commit/7d1cc3d))



### Features

* add contact type 'instagram' and 'linkedin' ([#10](https://github.com/ulivz/vuepress-theme-blog/issues/10)) ([ca0590c](https://github.com/ulivz/vuepress-theme-blog/commit/ca0590c))



## [1.2.2](https://github.com/ulivz/vuepress-theme-blog/compare/v1.2.1...v1.2.2) (2019-06-23)


### Bug Fixes

* require `modifyBlogPluginOptions` to delete the `archive` classifier ([5a34e26](https://github.com/ulivz/vuepress-theme-blog/commit/5a34e26))
* Vue is undefined ([42118a3](https://github.com/ulivz/vuepress-theme-blog/commit/42118a3))



## [1.2.1](https://github.com/ulivz/vuepress-theme-blog/compare/v1.2.0...v1.2.1) (2019-06-23)


### Bug Fixes

* bump blog plugin to 1.2.1 fix filter bug ([eab7fdd](https://github.com/ulivz/vuepress-theme-blog/commit/eab7fdd))



# [1.2.0](https://github.com/ulivz/vuepress-theme-blog/compare/v1.1.0...v1.2.0) (2019-06-22)


### Features

* paginationComponent option - ability to cutom pagination component ([5518887](https://github.com/ulivz/vuepress-theme-blog/commit/5518887))



# [1.1.0](https://github.com/ulivz/vuepress-theme-blog/compare/v1.0.1...v1.1.0) (2019-06-12)



## [1.0.1](https://github.com/ulivz/vuepress-theme-blog/compare/v1.0.0...v1.0.1) (2019-06-09)


### Features

* pwa option (defaults to false) ([6a5c282](https://github.com/ulivz/vuepress-theme-blog/commit/6a5c282))



# [1.0.0](https://github.com/ulivz/vuepress-theme-blog/compare/v1.0.0-beta.6...v1.0.0) (2019-06-09)


### Features

* bump deps ([d5468d4](https://github.com/ulivz/vuepress-theme-blog/commit/d5468d4))
* enhance the styls of SW-Update Popup ([#2](https://github.com/ulivz/vuepress-theme-blog/issues/2)) ([25d644f](https://github.com/ulivz/vuepress-theme-blog/commit/25d644f))



# [1.0.0-beta.6](https://github.com/ulivz/vuepress-theme-blog/compare/v1.0.0-beta.5...v1.0.0-beta.6) (2019-06-06)


### Features

* CSS Fixes and adjustments ([#1](https://github.com/ulivz/vuepress-theme-blog/issues/1)) ([066c1fd](https://github.com/ulivz/vuepress-theme-blog/commit/066c1fd))



# [1.0.0-beta.5](https://github.com/ulivz/vuepress-theme-blog/compare/v1.0.0-beta.4...v1.0.0-beta.5) (2019-06-05)


### Features

* enhance styles ([19e3841](https://github.com/ulivz/vuepress-theme-blog/commit/19e3841))



# [1.0.0-beta.4](https://github.com/ulivz/vuepress-theme-blog/compare/v1.0.0-beta.3...v1.0.0-beta.4) (2019-06-05)


### Features

* enhance the styles ([0a2c067](https://github.com/ulivz/vuepress-theme-blog/commit/0a2c067))
* summary & summary option ([7f07a8b](https://github.com/ulivz/vuepress-theme-blog/commit/7f07a8b))
* using GlobalLayout to simplify implementation ([8c89670](https://github.com/ulivz/vuepress-theme-blog/commit/8c89670))



# [1.0.0-beta.3](https://github.com/ulivz/vuepress-theme-blog/compare/v1.0.0-beta.2...v1.0.0-beta.3) (2019-06-04)


### Bug Fixes

* Cannot read property 'trim' of undefined ([0327584](https://github.com/ulivz/vuepress-theme-blog/commit/0327584))



# [1.0.0-beta.2](https://github.com/ulivz/vuepress-theme-blog/compare/v1.0.0-beta.1...v1.0.0-beta.2) (2019-06-04)


### Bug Fixes

* cannot resolve plugin "blog" ([ac30f96](https://github.com/ulivz/vuepress-theme-blog/commit/ac30f96))



# [1.0.0-beta.1](https://github.com/ulivz/vuepress-theme-blog/compare/v1.0.0-alpha.49...v1.0.0-beta.1) (2019-06-04)



# [1.0.0-alpha.49](https://github.com/ulivz/vuepress-theme-blog/compare/v1.0.0-alpha.48...v1.0.0-alpha.49) (2019-06-03)


### Bug Fixes

* add missing deps ([358c5be](https://github.com/ulivz/vuepress-theme-blog/commit/358c5be))



# [1.0.0-alpha.48](https://github.com/ulivz/vuepress-theme-blog/compare/f103ce9...v1.0.0-alpha.48) (2019-06-03)


### Features

* init ([f103ce9](https://github.com/ulivz/vuepress-theme-blog/commit/f103ce9))



