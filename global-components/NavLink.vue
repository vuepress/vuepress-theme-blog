<template>
  <router-link
    class="nav-link"
    :to="normalizedlink"
    v-if="!isExternal(normalizedlink)"
    :exact="exact"
  >
    <slot/>
  </router-link>
  <a
    v-else
    :href="normalizedlink"
    class="nav-link external"
    :target="isMailto(normalizedlink) || isTel(normalizedlink) ? null : '_blank'"
    :rel="isMailto(normalizedlink) || isTel(normalizedlink) ? null : 'noopener noreferrer'"
  >
    <slot/>
  </a>
</template>

<script>
import { isExternal, isMailto, isTel, ensureExt } from '../components/util'

export default {
  props: {
    link: {
      required: true
    }
  },

  computed: {
    normalizedlink () {
      return ensureExt(this.link)
    },

    exact () {
      if (this.$site.locales) {
        return Object.keys(this.$site.locales).some(rootLink => rootLink === this.normalizedlink)
      }
      return this.normalizedlink === '/'
    }
  },

  methods: {
    isExternal,
    isMailto,
    isTel
  }
}
</script>

<style lang="stylus">
.nav-link
  color var(--text)

.nav-link
  &:hover, &.router-link-active
    color var(--text--link)
</style>
