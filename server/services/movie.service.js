const { Movie } = require('../models/movie.model');

class MovieService {
  static getMovies() {
    return Movie.find({}, 'Title Poster Rated').sort({ Year: -1 });
  }
}

module.exports = { MovieService };