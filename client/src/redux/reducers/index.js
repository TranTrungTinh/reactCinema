import { combineReducers } from 'redux';
// reducer
import movieReducer from './movieReducer';
import movieDetailReducer from './movieDetailReducer';

const allReducer = combineReducers({
  movieReducer,
  movie: movieDetailReducer
});

export default allReducer; 