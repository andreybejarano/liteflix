<template>
  <v-form class="form-create">
    <v-container>
      <v-layout row wrap align-center>
        <v-flex xs12>
          <v-text-field v-model="form.title" label="Titulo" required></v-text-field>
        </v-flex>
        <v-flex xs12>
          <v-text-field v-model="form.original_title" label="Titulo original" required></v-text-field>
        </v-flex>
        <v-flex xs12>
          <v-text-field v-model="form.overview" label="Visión general" required></v-text-field>
        </v-flex>
        <v-flex xs12>
          <v-text-field v-model="form.backdrop_path" label="URL imagen de fondo" required></v-text-field>
        </v-flex>
        <v-flex xs6>
          <v-radio-group v-model="form.type">
            <v-radio
              v-for="(type, key) in typesMovie"
              :key="key"
              :label="type.text"
              :value="type.value"
            ></v-radio>
          </v-radio-group>
        </v-flex>
        <v-flex xs6>
          <v-checkbox v-model="form.adults" label="Adultos"></v-checkbox>
        </v-flex>
        <v-flex xs12>
          <v-btn block large color="red" dark @click="save">Crear</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </v-form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        title: "",
        original_title: "",
        overview: "",
        backdrop_path: "",
        adults: false,
        type: ""
      },
      typesMovie: [
        { value: "upcoming", text: "Proximas" },
        { value: "topRated", text: "Mejores ranqueadas" },
        { value: "popular", text: "Populares" }
      ]
    };
  },
  methods: {
    save() {
      this.$emit("onSave", this.form);
    }
  }
};
</script>

<style lang="scss" scoped>
.form-create {
  margin-top: 75px;
  background: #ffffff;
}
</style>

