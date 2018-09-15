import { combineReducers } from 'redux';
// reducer
import movieReducer from './movieReducer';

const allReducer = combineReducers({
  movieReducer
});

export default allReducer; 