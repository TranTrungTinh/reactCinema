import { combineReducers } from 'redux';
// reducer
import movieReducer from './movieReducer';
import movieDetailReducer from './movieDetailReducer';
import filteredMovieReducer from './filteredMovieReducer';
import selectedDayReducer from './selectedDayReducer';

const allReducer = combineReducers({
  movieReducer,
  selectedDayReducer,
  movie: movieDetailReducer,
  filteredMovie: filteredMovieReducer,
});

export default allReducer; 