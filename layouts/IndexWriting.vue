<template>
  <BaseListLayout :pagination="pagination"/>
</template>

<script>
import BaseListLayout from './BaseListLayout'

export default {
  components: { BaseListLayout },
  computed: {
    pagination () {
      console.warn(this.$pagination)
      return this.$pagination
    },
  },
}
</script>
