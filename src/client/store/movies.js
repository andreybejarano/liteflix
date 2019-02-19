import MoviesService from '@/services/Movies';

const moviesStore = {
  state: {
    nowPlaying: [],
    upcoming: [],
    topRated: [],
    popular: [],
    localMovies: []
  },
  getters: {
    recomendedMovie(state) {
      if (state.nowPlaying.length === 0) return '';
      return state.nowPlaying[0];
    }
  },
  mutations: {
    setLocalMovies(state, movies) {
      state.localMovies.push(movies);
    },
    setNowPlaying(state, movies) {
      state.nowPlaying = movies;
    },
    setUpcoming(state, movies) {
      state.upcoming = movies;
    },
    setTopRated(state, movies) {
      state.topRated = movies;
    },
    setPopular(state, movies) {
      state.popular = movies;
    }
  },
  actions: {
    saveMovie(context, payload) {
      context.commit('setLocalMovies', payload);
    },
    getNowPlaying(context, payload) {
      return MoviesService.getNowPlaying()
        .then(movies => {
          context.commit('setNowPlaying', movies.results);
          return movies.results;
        });
    },
    getUpcoming(context, payload) {
      return MoviesService.getUpcoming().then(movies => {
        context.commit('setUpcoming', movies.results);
        return movies.results;
      });
    },
    getTopRated(context, payload) {
      return MoviesService.getTopRated()
        .then(movies => {
          context.commit('setTopRated', movies.results);
          return movies.results;
        });
    },
    getPopular(context, payload) {
      return MoviesService.getPopular()
        .then(movies => {
          context.commit('setPopular', movies.results);
          return movies.results;
        });
    }
  }
};

export default moviesStore;
