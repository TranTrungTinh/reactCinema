import React, { Component } from 'react';
import './overview.css';

export default class Overview extends Component {
  render() {
    return (
      <div className="overview">
        <div className="day-select">
          <ul className="days">
            <li className="day active">Today</li>
            <li className="day">Monday</li>
            <li className="day">11/09</li>
            <li className="day">12/09</li>
            <li className="day">13/09</li>
          </ul>
        </div>
      </div>
    )
  }
}
