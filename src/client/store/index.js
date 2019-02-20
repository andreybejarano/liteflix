import Vue from 'vue';
import Vuex from 'vuex';

import moviesStore from './movies';
import drawerStore from './drawer';

Vue.use(Vuex);

export function createStore() {
  return new Vuex.Store({
    modules: {
      movies: moviesStore,
      drawer: drawerStore
    }
  });
}
