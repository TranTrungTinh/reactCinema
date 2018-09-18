const { Movie } = require('../models/movie.model');

class MovieService {
  static getMovies() {
    return Movie.find({}, 'Title Poster Genre Rated Year imdbID').sort({ Year: -1 });
  }

  static async getMovieByImdbId(id) {
    const movie = await Movie.findOne({ imdbID: id });
    if(!movie) throw new Error('CANNOT_FIND_MOVIE');
    return movie;
  }
}

module.exports = { MovieService };