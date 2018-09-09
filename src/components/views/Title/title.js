import React, { Component } from 'react';
import './title.css';

export default class Title extends Component {
  render() {
    return (
      <div className="title" >
        <img src="./logo.png" alt="this is logo" />
        <h1>React.js Cinema</h1>
      </div>
    )
  }
}
