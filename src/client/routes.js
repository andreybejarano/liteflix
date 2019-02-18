import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/pages/Home.vue';
import CreateMovie from '@/pages/CreateMovie.vue';

Vue.use(Router);

const routes = [
  { path: '/', component: Home, name: 'home' },
  { path: '/create', component: CreateMovie, name: 'createMovie' }
];

export function createRouter() {
  return new Router({
    mode: 'history',
    routes
  });
}
