const request = require('request-promise');

const config = require('../../config');

class MoviesService {
  async getNowPlaying() {
    try {
      const options = {
        method: 'GET',
        qs: {
          api_key: config.services.themoviedb.apiKey
        },
        json: true
      };

      const response = await request(config.endpoints.nowPlaying, options);
      return Promise.resolve(response);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async getUpcoming() {
    try {
      const options = {
        method: 'GET',
        qs: {
          api_key: config.services.themoviedb.apiKey
        },
        json: true
      };

      const response = await request(config.endpoints.upcoming, options);
      return Promise.resolve(response);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async getTopRated() {
    try {
      const options = {
        method: 'GET',
        qs: {
          api_key: config.services.themoviedb.apiKey
        },
        json: true
      };

      const response = await request(config.endpoints.topRated, options);
      return Promise.resolve(response);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async getPopular() {
    try {
      const options = {
        method: 'GET',
        qs: {
          api_key: config.services.themoviedb.apiKey
        },
        json: true
      };

      const response = await request(config.endpoints.popular, options);
      return Promise.resolve(response);
    } catch (error) {
      return Promise.reject(error);
    }
  }
}

module.exports = MoviesService;
