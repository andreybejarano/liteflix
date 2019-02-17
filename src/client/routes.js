import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/pages/Home.vue';

Vue.use(Router);

const routes = [
  { path: '/', component: Home, name: 'home' }
];

export function createRouter() {
  return new Router({
    mode: 'history',
    routes
  });
}
