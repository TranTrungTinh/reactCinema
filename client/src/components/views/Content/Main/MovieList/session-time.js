import React, { Component } from 'react';

export default class SessionTime extends Component {

  state = {
    show: false
  }

  mouseOver = () => {
    this.setState({ show: true });
  }

  mouseLeave = () => {
    this.setState({ show: false });
  }

  render() {
    return (
      <div className="session-time-wrapper tooltip-wrapper" 
        onMouseOver={this.mouseOver} onMouseLeave={this.mouseLeave}>
      <div className="session-time">{this.props.time}</div>
      <span className={this.state.show ? 'tooltip tooltip-show' : 'tooltip'}>
        Seats able: {this.props.seats}
      </span>
    </div>
    )
  }
}

