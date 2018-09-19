import * as moment from 'moment';
import { SELECTED_DAY} from '../actions/actionTypes';

const defautState = {
  selected: moment()
}

const selectedDayReducer = (state = defautState, action) => {

  if(action.type === SELECTED_DAY) return { selected: action.day };
  return state;
}

export default selectedDayReducer;