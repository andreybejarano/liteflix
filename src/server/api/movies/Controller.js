const MoviesService = require('./Service');

class MoviesController {
  static async getNowPlaying(req, res, next) {
    try {
      const service = new MoviesService();
      const response = await service.getNowPlaying();
      res.json(response);
    } catch (error) {
      return next(error);
    }
  }

  static async getUpcoming(req, res, next) {
    try {
      const service = new MoviesService();
      const response = await service.getUpcoming();
      res.json(response);
    } catch (error) {
      return next(error);
    }
  }

  static async getTopRated(req, res, next) {
    try {
      const service = new MoviesService();
      const response = await service.getTopRated();
      res.json(response);
    } catch (error) {
      return next(error);
    }
  }

  static async getPopular(req, res, next) {
    try {
      const service = new MoviesService();
      const response = await service.getPopular();
      res.json(response);
    } catch (error) {
      return next(error);
    }
  }
}

module.exports = MoviesController;
