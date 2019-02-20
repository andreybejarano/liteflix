import Vue from 'vue';
import Vuetify from 'vuetify';
import VeeValidate from 'vee-validate';

import App from '@/App.vue';

import { createRouter } from '@/routes';
import { createStore } from '@/store';

Vue.use(VeeValidate);
Vue.use(Vuetify);

export function createApp() {
  const router = createRouter();
  const store = createStore();

  const app = new Vue({
    router,
    store,
    render: h => h(App)
  });

  return { app, router, store };
}
