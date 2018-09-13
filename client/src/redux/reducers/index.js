import { combineReducers } from 'redux';
import movieReducer from './movieReducer';

const allReducer = combineReducers({
  movies: movieReducer
});

export default allReducer; 