<template>
  <header>
    <v-toolbar color="transparent" dark fixed>
      <v-toolbar-side-icon class="hidden-desktop show-mobile" @click.stop="showDrawer"></v-toolbar-side-icon>
      <v-toolbar-title>
        <img src="/static/img/liteflix.svg" alt>
      </v-toolbar-title>
      <v-toolbar-items class="hidden-mobile">
        <v-btn flat>Inicio</v-btn>
        <v-btn flat>Series</v-btn>
        <v-btn flat>Peliculas</v-btn>
        <v-btn flat>Agregados recientemente</v-btn>
        <v-btn flat>Mi lista</v-btn>
        <router-link :to="{ name: 'createMovie' }">
          <v-btn fab dark color="red">
            <v-icon dark>add</v-icon>
          </v-btn>
        </router-link>
      </v-toolbar-items>
      <v-text-field
        class="hidden-mobile"
        hide-details
        prepend-icon="search"
        single-line
        placeholder="Titulos, géneros, personas"
      ></v-text-field>
      <span class="hidden-mobile">Niños</span>
      <v-icon class="hidden-mobile">notifications_none</v-icon>
      <v-menu class="hidden-mobile" bottom left>
        <div slot="activator">
          <v-icon color="indigo" darkl>account_circle</v-icon>
          <v-icon>expand_more</v-icon>
        </div>
        <v-list>
          <v-list-tile>
            <v-list-tile-title>Item</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>
  </header>
</template>

<script>
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions(["showDrawer"])
  }
};
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
}
.hidden-mobile {
  @media screen and (max-width: 360px) {
    display: none;
  }
}

.show-mobile {
  @media screen and (max-width: 360px)  {
    display: block;
  }
}

.hidden-desktop {
  @media screen and (min-width: 361px)  {
    display: none;
  }
}
</style>
