<template>
  <BaseListLayout :pagination="pagination"/>
</template>

<script>
import BaseListLayout from './BaseListLayout'

export default {
  components: { BaseListLayout },
  computed: {
    pagination() {
      if (this.$route.meta.pid) {
        return this.$pagination
      }
      return this.$getPagination('post')
    },
  },
}
</script>
