const { Router } = require('express');
const { MovieService } = require('../services/movie.service');

const movieRouter = Router();

movieRouter.get('/api/movies', (req, res) => {
  MovieService.getMovies()
  .then(movies => res.status(200).send({ success: true, movies }))
  .catch(error => res.status(400).send({ success: false, message: error }));
});

movieRouter.get('/api/movies/:id', (req, res) => {
  const imdbID = req.params.id ? req.params.id : '';
  MovieService.getMovieByImdbId(imdbID)
  .then(movie => res.status(200).send({ success: true, movie }))
  .catch(error => res.status(404).send({ success: false, message: error.message }));
});

module.exports = { movieRouter };