<template>
  <v-layout row wrap justify-center class="white--text">
    <lf-form-create @onSave="onSave"></lf-form-create>
    <v-snackbar
      class="alert-created"
      v-model="alert"
      color="#1db328"
      multi-line
      :timeout="2000"
      vertical
    >
      Pelicula guardada
      <v-btn dark flat @click="alert = false">Cerrar</v-btn>
    </v-snackbar>
  </v-layout>
</template>

<script>
import { mapActions } from "vuex";

import LfFormCreate from "@/components/FormCreate.vue";
export default {
  data() {
    return {
      alert: false
    };
  },
  components: {
    LfFormCreate
  },
  methods: {
    ...mapActions(["saveMovie"]),

    onSave(res) {
      this.saveMovie(res);
      this.alert = true;
      setTimeout(() => {
        this.$router.push({ name: "home" });
      }, 1000);
    }
  }
};
</script>

