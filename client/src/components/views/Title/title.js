import React, { Component } from 'react';
import './title.css';

import MyModal from '../Modal/modal';

export default class Title extends Component {

  state = {
    open: false
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div className="title" >
        <img src="./images/logo.png" alt="this is logo" />
        <h1>React.js Cinema</h1>
        <div className="title-login">
          <button onClick={this.onOpenModal}>LOG IN</button>
        </div>
        <MyModal open={this.state.open} onCloseModal={this.onCloseModal} />
      </div>
    )
  }
}
