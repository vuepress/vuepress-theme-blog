<template>
  <div id="vuperess-theme-blog__tags-layout">
    <BlogTags :tags="$tag.list"/>
  </div>
</template>

<script>
  export default {
    created() {
      console.log(this.$tag.list)
    }
  }
</script>

