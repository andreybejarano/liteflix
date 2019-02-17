import MoviesService from '@/services/Movies';

const moviesStore = {
  state: {
    nowPlaying: [],
    upcoming: [],
    topRated: [],
    popular: []
  },
  getters: {

  },
  mutations: {
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
    async getNowPlaying(context, payload) {
      const movies = await MoviesService.getNowPlaying();
      context.commit('setNowPlaying', movies.results);
      return movies.results;
    },
    async getUpcoming(context, payload) {
      const movies = await MoviesService.getUpcoming();
      context.commit('setUpcoming', movies.results);
      return movies.results;
    },
    async getTopRated(context, payload) {
      const movies = await MoviesService.getTopRated();
      context.commit('setTopRated', movies.results);
      return movies.results;
    },
    async getPopular(context, payload) {
      const movies = await MoviesService.getPopular();
      context.commit('setPopular', movies.results);
      return movies.results;
    }
  }
};

export default moviesStore;
