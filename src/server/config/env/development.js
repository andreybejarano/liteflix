'use strict';

module.exports = {
  env: 'development',
  port: process.env.PORT || 8080,

  services: {
    themoviedb: {
      apiBasePath: 'https://api.themoviedb.org/3',
      apiKey: process.env.KEY_THEMOVIEDB
    }
  }

};
