import { FETCH_DETAIL_FAIL, FETCH_DETAIL_SUCCESS } from '../actions/actionTypes';

const movieDetailReducer = (state = {}, action) => {
  if(action.type === FETCH_DETAIL_SUCCESS) return action.movie;
  if(action.type === FETCH_DETAIL_FAIL) return {};
  return state;
}

export default movieDetailReducer;