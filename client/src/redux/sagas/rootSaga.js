import { all, fork } from 'redux-saga/effects';

import { watchFetchMovies, watchFetchMovieByImdbID } from './movieSaga';

const mySaga = [
  watchFetchMovies,
  watchFetchMovieByImdbID
];

export default function* rootSaga() {
  yield all(mySaga.map(saga => fork(saga)));
}