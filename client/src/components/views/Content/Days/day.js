import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as moment from 'moment';
import * as actionCreators from '../../../../redux/actions';

class Day extends Component {

  state = {
    days: [0, 1, 2, 3, 4, 5, 6].map(num => moment().add(num, 'days'))
  }

  formatDay = (day) => {
    if(day.isSame(moment(), 'day')) return 'Today';
    return day.format('ddd DD/MM');
  }

  isActive = (day) => {
    return day.isSame(this.props.selected, 'day');
  }

  onSelected = (daySelected) => {
    this.props.selectedDayAction(daySelected);
  }

  render() {
    return (
      <div className="day-select">
        <ul className="days">
          {
            this.state.days.map((day, index) => 
              <li 
                key={index}
                className={this.isActive(day) ? "day active" : "day"}
                onClick={() => this.onSelected(day)}
              >{this.formatDay(day)}</li>)
          }
          <li className="day-selector">
            <span className="dec"></span>
            <span className="inc"></span>
          </li>
        </ul>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  ...state.selectedDayReducer
})
export default connect(mapStateToProps, actionCreators)(Day);