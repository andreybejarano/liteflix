import request from '@/tools/request';

import config from './config';

export default class MoviesService {
  static getNowPlaying() {
    const options = {
      method: 'GET'
    };

    return new Promise((resolve, reject) => {
      request(config.endpoints.apiLocal.nowPlaying, options)
        .then(res => {
          return resolve(res);
        });
    });
  }

  static getUpcoming() {
    const options = {
      method: 'GET'
    };
    return new Promise((resolve, reject) => {
      request(config.endpoints.apiLocal.upcoming, options)
        .then(res => resolve(res));
    });
  }

  static getTopRated() {
    const options = {
      method: 'GET'
    };

    return new Promise((resolve, reject) => {
      request(config.endpoints.apiLocal.topRated, options)
        .then(res => resolve(res));
    });
  }

  static getPopular() {
    const options = {
      method: 'GET'
    };

    return new Promise((resolve, reject) => {
      request(config.endpoints.apiLocal.popular, options)
        .then(res => resolve(res));
    });
  }
}
