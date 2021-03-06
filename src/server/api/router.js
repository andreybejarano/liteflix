const express = require('express');
const router = express.Router();

const routerMovies = require('./movies/router');

router.use('/movies', routerMovies);

module.exports = router;
