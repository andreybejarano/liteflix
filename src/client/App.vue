<template>
  <div id="app">
    <lf-layout></lf-layout>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";

import LfLayout from '@/layout/Default.vue'
export default {
  name: 'app',
  components: {
    LfLayout
  },
  mounted() {
    this.getNowPlaying()
    this.getUpcoming()
    this.getTopRated()
    this.getPopular()
  },
  methods: {
    ...mapActions(["getNowPlaying", "getUpcoming", "getTopRated", "getPopular"])
  }
}
</script>

<style lang="scss" scoped>
  @import './scss/main.scss';
</style>
