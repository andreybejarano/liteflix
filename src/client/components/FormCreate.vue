<template>
  <v-form class="form-create">
    <v-container>
      <v-layout row wrap align-center>
        <v-flex xs12>
          <v-text-field
            v-model="form.title"
            label="Titulo"
            data-vv-name="title"
            v-validate="'required'"
            :error-messages="errors.collect('title')"
            required
          ></v-text-field>
        </v-flex>
        <v-flex xs12>
          <v-text-field
            v-model="form.original_title"
            label="Titulo original"
            data-vv-name="original_title"
            v-validate="'required'"
            :error-messages="errors.collect('original_title')"
            required
          ></v-text-field>
        </v-flex>
        <v-flex xs12>
          <v-text-field
            v-model="form.overview"
            label="Visión general"
            data-vv-name="overview"
            v-validate="'required'"
            :error-messages="errors.collect('overview')"
            required
          ></v-text-field>
        </v-flex>
        <v-flex xs12>
          <v-text-field
            v-model="form.backdrop_path"
            label="URL imagen de fondo"
            v-validate="{url: {require_protocol: true }, required: true }"
            data-vv-name="backdrop_path"
            :error-messages="errors.collect('backdrop_path')"
            required
          ></v-text-field>
        </v-flex>
        <v-flex xs6>
          <v-radio-group
            v-model="form.type"
            v-validate="'required'"
            data-vv-name="type"
            :error-messages="errors.collect('type')"
          >
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
  $_veeValidate: {
    validator: "new"
  },
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
      ],
      dictionary: {
        custom: {
          title: {
            required: () => "El campo titulo es requerido"
          },
          original_title: {
            required: () => "El campo Titulo original es requerido"
          },
          overview: {
            required: () => "El campo Vision general es requerido"
          },
          backdrop_path: {
              required: () => "La URL de la images es requerida",
              url:() => "URL incorrecta"
          },
          type: {
              required: () => "Seleccione un tipo",
          }
        },
      }
    };
  },
  methods: {
    save() {
      this.$validator.validateAll().then(valid => {
        if(valid) {
          this.$emit("onSave", this.form);
        }
      });
    }
  },
  mounted() {
    this.$validator.localize("es", this.dictionary);
  }
};
</script>

<style lang="scss" scoped>
.form-create {
  margin-top: 75px;
  background: #ffffff;
}
.error--text {
  color:red;
}
</style>

