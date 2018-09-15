import axios from 'axios';
import { delay } from 'redux-saga';

const uriGetMovie = 'http://localhost:3001/api/movies';

function* getMovieFromApi(duration) {
  yield delay(duration);
  const response = yield axios.get(uriGetMovie);
  const movies = yield response.status === 200 ? response.data.movies : [];
  return movies;
}

export const Api = {
  getMovieFromApi
}