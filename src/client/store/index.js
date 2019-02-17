import Vue from 'vue';
import Vuex from 'vuex';

import MoviesStore from './movies';

Vue.use(Vuex);

export function createStore() {
  return new Vuex.Store({
    modules: {
      movies: MoviesStore
    }
  });
}
