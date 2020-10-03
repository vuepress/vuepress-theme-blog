<template>
  <a v-if="firstEnabledFeed" class="feed" :href="feedFilePath">
    <RssIcon />
  </a>
</template>

<script>
import { RssIcon } from 'vue-feather-icons'

export default {
  components: { RssIcon },

  computed: {
    firstEnabledFeed() {
      for (const feed in this.$service.feed) {
        const isEnabled = this.$service.feed[feed]
        if (isEnabled) return feed
      }
      return false
    },
    feedFilePath() {
      if (!this.firstEnabledFeed) return

      let path = ''
      if (this.firstEnabledFeed === 'rss') path = '/rss.xml'
      if (this.firstEnabledFeed === 'atom') path = '/feed.atom'
      if (this.firstEnabledFeed === 'json') path = '/feed.json'

      return this.$withBase(path)
    },
  },
}
</script>

<style lang="stylus">
.feed
  display flex
  align-items center
  color inherit

  &:hover
    color $accentColor
</style>
