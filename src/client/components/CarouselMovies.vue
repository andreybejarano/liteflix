<template>
  <v-layout v-if="movies.length !== 0" row wrap class="white--text">
    <div class="container-movie" v-for="(movie, key) in moviesToshow" v-bind:key="key">
      <lf-card-movie :movie="movie"></lf-card-movie>
    </div>
  </v-layout>
</template>

<script>
import LfCardMovie from "./CardMovie";
export default {
  data() {
    return {
      moviesToshow: []
    }
  },
  props: {
    movies: []
  },
  created() {
    this.moviesToshow = this.movies.filter((movie, index) => index < 5)
  },
  components: {
    LfCardMovie
  }
};
</script>

<style lang="scss" scoped>
  .container-movie {
    margin: 0 8px;
  }
</style>

