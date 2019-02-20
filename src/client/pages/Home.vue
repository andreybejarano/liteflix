<template>
  <v-layout row wrap align-center justify-center class="white--text">
    <lf-recomended-movie v-if="nowPlaying.length !== 0" :movie="recomendedMovie"></lf-recomended-movie>
    <div v-if="upcoming.length !== 0" class="upcomming">
      <h2>Próximamente</h2>
      <lf-carousel-movies :movies="upcoming"></lf-carousel-movies>
    </div>
    <div v-if="topRated.length !== 0" class="top-rated">
      <h2>Mejores ranqueadas</h2>
      <lf-carousel-movies :movies="topRated"></lf-carousel-movies>
    </div>
    <div v-if="popular.length !== 0" class="popular">
      <h1>POPULARES DE LITEFLIX</h1>
      <lf-carousel-movies :movies="popular"></lf-carousel-movies>
    </div>
  </v-layout>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import LfRecomendedMovie from "@/components/RecomendedMovie.vue";
import LfCarouselMovies from "@/components/CarouselMovies.vue";

export default {
  components: {
    LfRecomendedMovie,
    LfCarouselMovies
  },
  computed: {
    ...mapState({
      nowPlaying: state => state.movies.nowPlaying,
      upcoming: state => state.movies.upcoming,
      topRated: state => state.movies.topRated,
      popular: state => state.movies.popular
    }),
    ...mapGetters(["recomendedMovie"])
  }
};
</script>

<style lang="scss" scoped>
.upcomming {
  @media screen and (min-width: 361px) {
    position: relative;
    transform: translatey(-50%);
  }
}
</style>

