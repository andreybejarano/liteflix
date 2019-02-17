<template>
  <v-img v-if="movie.backdrop_path" :src="getUrlImg()" width="300px" height="200px">

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
      return `${config.urlAssets}${this.movie.backdrop_path}`;
    }
  }
}
</script>
