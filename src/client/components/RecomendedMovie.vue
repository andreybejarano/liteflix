<template>
  <v-img v-if="movie.backdrop_path" :src="getUrlImg()" max-height="600px">
    <v-layout row fill-height align-center class="lightbox white--text">
      <v-flex xs11 offset-xs1>
        <h1>{{ movie.title }}</h1>
      </v-flex>
    </v-layout>
  </v-img>
</template>

<script>
import config from "@/config";

export default {
  props: {
    movie: {}
  },
  methods: {
    getUrlImg() {
      return `${config.urlAssets}/original${this.movie.backdrop_path}`;
    }
  }
};
</script>

<style lang="scss" scoped>
  h1 {
    font-size: 100px;
  }
</style>

