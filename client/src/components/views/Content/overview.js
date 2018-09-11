import React, { Component } from 'react';
import './overview.css';

import Day from './Days/day';
import Main from './Main/main';

export default class Overview extends Component {
  render() {
    return (
      <div className="overview">
        <Day />
        <Main />
      </div>
    )
  }
}
