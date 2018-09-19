import { getRandomTimeAtDay } from '../../utils/RandomSessions';
import { FETCH_SUCCESS, FETCH_FAIL } from '../actions/actionTypes';

const initState = {
  movies: [],
  isLoading: true
}

const movieReducer = (state = initState, action) => {

  if(action.type === FETCH_SUCCESS) { 
    const customMovies = action.movies.map(movie => {
      return {...movie, sessions: getRandomTimeAtDay()}
    });
    return { movies: customMovies, isLoading: false }
  };

  if(action.type === FETCH_FAIL) return initState;
  return state;
}

export default movieReducer;