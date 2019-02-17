const router = require('express').Router();

const MoviesController = require('./Controller');

router.get('/now-playing', MoviesController.getNowPlaying);
router.get('/upcoming', MoviesController.getUpcoming);
router.get('/top-rated', MoviesController.getTopRated);
router.get('/popular', MoviesController.getPopular);

module.exports = router;
