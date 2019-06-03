<template>
  <LayoutWrapper class="tags-layout">
    <div class="main">
      <BlogTags :tags="$tag.list"/>
    </div>
  </LayoutWrapper>
</template>

<script>
  export default {
    created() {
      console.log(this.$tag.list)
    }
  }
</script>

<style lang="stylus">
</style>

