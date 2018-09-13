const { Router } = require('express');
const { MovieService } = require('../services/movie.service');

const movieRouter = Router();

movieRouter.get('/api/movies', (req, res) => {
  MovieService.getMovies()
  .then(movies => res.status(200).send({ success: true, movies }))
  .catch(error => res.status(400).send({ success: false, message: error }));
});

module.exports = { movieRouter };