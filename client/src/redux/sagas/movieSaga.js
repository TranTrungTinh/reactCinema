import { put, takeLatest } from 'redux-saga/effects';

import { Api } from './api';
import { FETCH_MOVIES, FETCH_SUCCESS, FETCH_FAIL } from '../actions/actionTypes';

function* fetchMovies() {
  try {
    const movies = yield Api.getMovieFromApi();
    yield put({ type: FETCH_SUCCESS, movies });
  } catch (error) {
    yield put({ type: FETCH_FAIL, error });
  }
}

export function* watchFetchMovies() {
  yield takeLatest(FETCH_MOVIES, fetchMovies);
}
