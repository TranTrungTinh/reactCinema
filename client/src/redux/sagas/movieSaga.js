import { put, takeLatest, call } from 'redux-saga/effects';

import { Api } from './api';
import { 
  FETCH_MOVIES, FETCH_SUCCESS, FETCH_FAIL, 
  FETCH_DETAIL_MOVIE, FETCH_DETAIL_SUCCESS, FETCH_DETAIL_FAIL
} from '../actions/actionTypes';

function* fetchMovies() {
  try {
    const movies = yield call(Api.getMovieFromApi, 1500);
    yield put({ type: FETCH_SUCCESS, movies });
  } catch (error) {
    yield put({ type: FETCH_FAIL, error });
  }
}

export function* watchFetchMovies() {
  yield takeLatest(FETCH_MOVIES, fetchMovies);
}

function* fetchDetailMovieByImdbID(action) {
  try {
    const movie = yield call(Api.getMovieByImdbIDFromApi, action.imdbID);
    yield put({ type: FETCH_DETAIL_SUCCESS, movie });
  } catch (error) {
    yield put({ type: FETCH_DETAIL_FAIL, error });
  }
}

export function* watchFetchMovieByImdbID() {
  yield takeLatest(FETCH_DETAIL_MOVIE, fetchDetailMovieByImdbID);
}

