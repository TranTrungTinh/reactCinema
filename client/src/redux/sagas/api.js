import axios from 'axios';

const uriGetMovie = 'http://localhost:3001/api/movies';

function* getMovieFromApi() {
  const response = yield axios.get(uriGetMovie);
  const movies = yield response.status === 200 ? response.data.movies : [];
  return movies;
}

export const Api = {
  getMovieFromApi
}