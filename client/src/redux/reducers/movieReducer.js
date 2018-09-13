import { FETCH_SUCCESS, FETCH_FAIL } from '../actions/actionTypes';

const movieReducer = (state = [], action) => {
  if(action.type === FETCH_SUCCESS) return action.movies
  if(action.type === FETCH_FAIL) return [];
  return state;
}

export default movieReducer;