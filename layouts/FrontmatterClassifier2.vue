<template>
  <BaseListLayout :pagination="pagination"/>
</template>

<script>
  import BaseListLayout from './BaseListLayout'
  
  export default {
    components: { BaseListLayout },
    computed: {
      pagination() {
        const { pid, id } = this.paths
        return this.$pagination(pid, id)
      },
      paths() {
        const path = this.$route.path
        console.log(path.split('/').filter(v => v))
        const [pid, id] = path.split('/').filter(v => v)
        
        return {
          pid,
          id,
        }
      },
    },
  }
</script>

<style>
  .page-title {
    text-transform: uppercase;
  }
</style>
