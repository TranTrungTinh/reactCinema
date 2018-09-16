import axios from 'axios';
import { delay } from 'redux-saga';

const uriGetMovie = 'http://localhost:3001/api/movies';
const uriGetMovieByImdbID = 'http://localhost:3001/api/movies/';

function* getMovieFromApi(duration) {
  yield delay(duration);
  const response = yield axios.get(uriGetMovie);
  const movies = yield response.status === 200 ? response.data.movies : [];
  return movies;
}

function* getMovieByImdbIDFromApi(imdbID) {
  const response = yield axios.get(uriGetMovieByImdbID + imdbID);
  const movie = yield response.status === 200 ? response.data.movie : {};
  return movie;
}

export const Api = {
  getMovieFromApi,
  getMovieByImdbIDFromApi
}