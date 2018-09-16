import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Title from './components/views/Title/title';
import Overview from './components/views/Content/overview';
import Detail from './components/views/Detail/detail';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Title />
          <Switch>
            <Route exact path="/" component={Overview} />
            <Route exact path="/movie/:imdbID" component={Detail} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
