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
    setLocalMovies(state, movie) {
      let localMovies = JSON.parse(localStorage.getItem('localMovies')) || { results: [] };
      if (movie) {
        localMovies.results.push(movie);
        localStorage.setItem('localMovies', JSON.stringify(localMovies));
        state[movie.type].unshift(movie);
      }
      state.localMovies = localMovies.results;
    },
    mergeLocalMovies(state) {
      state.localMovies.forEach(element => {
        state[element.type].unshift(element);
      });
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
    getLocalMovies(context) {
      context.commit('setLocalMovies');
    },
    mergeLocalMovies(context) {
      context.commit('mergeLocalMovies');
    },
    getNowPlaying(context) {
      return MoviesService.getNowPlaying()
        .then(movies => {
          context.commit('setNowPlaying', movies.results);
          return movies.results;
        });
    },
    getUpcoming(context) {
      return MoviesService.getUpcoming().then(movies => {
        context.commit('setUpcoming', movies.results);
        return movies.results;
      });
    },
    getTopRated(context) {
      return MoviesService.getTopRated()
        .then(movies => {
          context.commit('setTopRated', movies.results);
          return movies.results;
        });
    },
    getPopular(context) {
      return MoviesService.getPopular()
        .then(movies => {
          context.commit('setPopular', movies.results);
          return movies.results;
        });
    }
  }
};

export default moviesStore;
