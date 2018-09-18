import { 
  FETCH_MOVIES, FETCH_SUCCESS, FETCH_FAIL, 
  FETCH_DETAIL_MOVIE, FILTERED_MOVIES
 } from './actionTypes';

export const fetchMovieAction = () => {
  return { type: FETCH_MOVIES }
}

export const fetchDetailMovieAction = (imdbID) => {
  return { type: FETCH_DETAIL_MOVIE, imdbID }
}

export const filteredMoviesAction = (genre) => {
  return { type: FILTERED_MOVIES, genre }
}

// Action sent by redux saga

export const fetchMovieSuccess = (recieveMovies) => {
  return { type: FETCH_SUCCESS, movies: recieveMovies }
}
export const fetchMovieFail = (error) => {
  return { type: FETCH_FAIL, error }
}