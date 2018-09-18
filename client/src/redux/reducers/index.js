import { combineReducers } from 'redux';
// reducer
import movieReducer from './movieReducer';
import movieDetailReducer from './movieDetailReducer';
import filteredMovieReducer from './filteredMovieReducer';

const allReducer = combineReducers({
  movieReducer,
  movie: movieDetailReducer,
  filteredMovie: filteredMovieReducer
});

export default allReducer; 