import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

import App from '@/App.vue';

import { createRouter } from '@/routes';

Vue.use(Vuetify);

export function createApp() {
  const router = createRouter();

  const app = new Vue({
    router,
    render: h => h(App)
  });

  return { app, router };
}
