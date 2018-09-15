import { all, fork } from 'redux-saga/effects';

import { watchFetchMovies } from './movieSaga';

export default function* rootSaga() {
  yield all([
    fork(watchFetchMovies)
  ]);
}