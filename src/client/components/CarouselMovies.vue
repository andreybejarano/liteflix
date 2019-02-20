<template>
  <v-container>
    <div>
      <v-layout v-if="movies.length !== 0" class="white--text">
        <v-flex
          xs12
          md3
          class="container-movie"
          v-for="(movie, key) in moviesToshow"
          v-bind:key="key"
        >
          <lf-card-movie :movie="movie"></lf-card-movie>
        </v-flex>
      </v-layout>
    </div>
  </v-container>
</template>

<script>
import LfCardMovie from "./CardMovie";
export default {
  data() {
    return {
      moviesToshow: []
    };
  },
  props: {
    movies: undefined
  },
  created() {
    this.moviesToshow = this.movies.filter((movie, index) => index < 5);
  },
  components: {
    LfCardMovie
  }
};
</script>

<style lang="scss" scoped>
.container-movie {
  margin: 0px 8px 0px 0px;
}
</style>

