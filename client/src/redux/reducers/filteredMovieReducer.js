import { FILTERED_MOVIES} from '../actions/actionTypes';


const filteredMovieReducer = (state = [], action) => {

  if(action.type === FILTERED_MOVIES) { 
    const item = state.find(genre => genre === action.genre);
    if(!item) return [...state, action.genre];
    return state.filter(genre => genre !== action.genre) ;
  };
  return state;
}

export default filteredMovieReducer;