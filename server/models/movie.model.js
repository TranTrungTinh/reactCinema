const mongoose = require('mongoose');
const { Schema } = mongoose;

const MovieSchema = new Schema({
  Title : { type: String, required: true, trim: true },
  Year: { type: String, required: true, trim: true },
  Rated: { type: String, required: true, trim: true },
  Released: { type: String, required: true, trim: true },
  Runtime: { type: String, required: true, trim: true },
  Genre: { type: String, required: true, trim: true },
  Director: { type: String, required: true, trim: true },
  Writer: { type: String, required: true, trim: true },
  Actors: { type: String, required: true, trim: true },
  Plot: { type: String, required: true, trim: true },
  Language: { type: String, required: true, trim: true },
  Country: { type: String, required: true, trim: true },
  Poster: { type: String, required: true, trim: true },
  Metascore:{ type: String, required: true, trim: true },
  imdbRating: { type: String, required: true, trim: true },
  imdbVotes: { type: String, required: true, trim: true },
  imdbID: { type: String, required: true, trim: true },
  Type: { type: String, required: true, trim: true },
  Production:{ type: String, required: true, trim: true },
  Website: { type: String, required: true, trim: true },
});

const Movie = mongoose.model('Movie', MovieSchema);
module.exports = { Movie };

