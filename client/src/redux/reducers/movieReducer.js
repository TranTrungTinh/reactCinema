import { FETCH_SUCCESS, FETCH_FAIL } from '../actions/actionTypes';

const initState = {
  movies: [],
  isLoading: true
}

const movieReducer = (state = initState, action) => {

  if(action.type === FETCH_SUCCESS) { 
    return { movies: action.movies, isLoading: false }
  };

  if(action.type === FETCH_FAIL) return initState;
  return state;
}

export default movieReducer;