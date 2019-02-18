<template>
  <v-img v-if="movie.backdrop_path" :src="getUrlImg()" width="230px" height="150px">

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
      return `${config.urlAssets}/w500${this.movie.backdrop_path}`;
    }
  }
}
</script>
