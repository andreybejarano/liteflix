<template>
  <div class="white--text">
    <lf-recomended-movie :movie="recomendedMovie"></lf-recomended-movie>
    <div class="upcomming">
      <h2>Próximamente</h2>
      <lf-carousel-movies v-if="nowPlaying.length!==0" :movies="upcoming"></lf-carousel-movies>
    </div>
    <div class="top-rated">
      <h2>Mejores ranqueadas</h2>
      <lf-carousel-movies v-if="topRated.length!==0" :movies="topRated"></lf-carousel-movies>
    </div>
    <div class="popular">
      <h1>POPULARES DE LITEFLIX</h1>
      <lf-carousel-movies v-if="popular.length!==0" :movies="popular"></lf-carousel-movies>
    </div>
  </div>
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
