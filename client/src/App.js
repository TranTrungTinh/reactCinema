import React, { Component } from 'react';

import Title from './components/views/Title/title';
import Overview from './components/views/Content/overview';

import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Title />
        <Overview />
      </React.Fragment>
    );
  }
}

export default App;
