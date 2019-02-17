const config = require('./env/index');
const basePathThemovie = config.services.themoviedb.apiBasePath;

module.exports = {
  nowPlaying: `${basePathThemovie}/movie/now_playing`,
  upcoming: `${basePathThemovie}/movie/upcoming`,
  topRated: `${basePathThemovie}/movie/top_rated`,
  popular: `${basePathThemovie}/movie/popular`
};
