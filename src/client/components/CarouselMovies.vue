<template>
  <v-layout v-if="movies.length!==0" row align-center class="lightbox white--text">
    <v-flex xs2 v-for="(movie, key) in movies" v-bind:key="key">
      <lf-card-movie :movie="movie"></lf-card-movie>
    </v-flex>
  </v-layout>
</template>

<script>
import LfCardMovie from "./CardMovie";
export default {
  props: {
    movies: []
  },
  components: {
    LfCardMovie
  }
};
</script>
