<template>
  <footer class="white--text">
    <v-container>
      <v-layout row wrap>
        <v-flex xs12>
          <v-layout row wrap>
            <v-flex xs1>
              <v-img width="22px" src="/static/img/ic-facebook.svg"/>
            </v-flex>
            <v-flex xs1>
              <v-img width="22px" src="/static/img/ic-instagram.svg"/>
            </v-flex>
            <v-flex xs1>
              <v-img width="22px" src="/static/img/ic-twitter.svg"/>
            </v-flex>
            <v-flex xs1>
              <v-img width="22px" src="/static/img/ic-youtube.svg"/>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex xs12>
          <v-layout row wrap>
            <v-flex xs3>
              <v-list dark>
                <div class="v-list-tile">
                  Todos los titulos
                </div>
                <div class="v-list-tile">
                  Prensa
                </div>
                <div class="v-list-tile">
                  Confidencialidad
                </div>
                <div class="v-list-tile">
                  Contacto
                </div>
              </v-list>
            </v-flex>
            <v-flex xs3>
              <v-list dark>
                <div class="v-list-tile">
                  Cancelar Subscripción
                </div>
                <div class="v-list-tile">
                  Inversores
                </div>
                <div class="v-list-tile">
                  Legales
                </div>
              </v-list>
            </v-flex>
            <v-flex xs3>
              <v-list dark>
                <div class="v-list-tile">
                  Legales
                </div>
                <div class="v-list-tile">
                  RRHH
                </div>
                <div class="v-list-tile">
                  Cookies
                </div>
              </v-list>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
  </footer>
</template>

<style lang="scss" scoped>
.v-list {
  background: #000000;
}

.v-list-tile {
  padding: 8px 0;
}
</style>
