const apiBasePath = '/api';
const configService = {
  apiBasePath,
  endpoints: {
    apiLocal: {
      nowPlaying: `${apiBasePath}/movies/now-playing`,
      upcoming: `${apiBasePath}/movies/upcoming`,
      topRated: `${apiBasePath}/movies/top-rated`,
      popular: `${apiBasePath}/movies/popular`
    }
  }
};

export default configService;
