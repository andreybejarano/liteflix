<template>
  <div id="app">
    <div v-if="loading" class="container-loading">
      <v-progress-circular :size="70" :width="7" color="red" indeterminate></v-progress-circular>
    </div>
    <lf-layout v-else></lf-layout>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";

import LfLayout from "@/layout/Default.vue";
export default {
  name: "app",
  data() {
    return {
      loading: true
    };
  },
  components: {
    LfLayout
  },
  mounted() {
    Promise.all([
      this.getNowPlaying(),
      this.getUpcoming(),
      this.getTopRated(),
      this.getPopular(),
      this.getLocalMovies()
    ]).then(() => {
      this.loading = false;
    });
  },
  methods: {
    ...mapActions([
      "getLocalMovies",
      "getNowPlaying",
      "getUpcoming",
      "getTopRated",
      "getPopular"
    ])
  }
};
</script>

<style lang="scss" scoped>
@import "./scss/main.scss";
.container-loading {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #000000;
}
</style>
