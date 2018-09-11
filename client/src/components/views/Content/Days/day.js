import React, { Component } from 'react'

export default class Day extends Component {
  render() {
    return (
      <div className="day-select">
        <ul className="days">
          <li className="day active">Today</li>
          <li className="day">Monday</li>
          <li className="day">11/09</li>
          <li className="day">12/09</li>
          <li className="day">13/09</li>
          <li className="day-selector">
            <span className="dec"></span>
            <span className="inc"></span>
          </li>
        </ul>
      </div>
    )
  }
}
