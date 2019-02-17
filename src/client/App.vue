<template>
  <div id="app">
    <lf-layout></lf-layout>
  </div>
</template>

<script>
import LfLayout from '@/layout/Default.vue'
export default {
  name: 'app',
  components: {
    LfLayout
  }
}
</script>

<style lang="scss" scoped>
  @import './scss/main.scss';
</style>
