import React, { Component } from 'react';

import MovieFilter from './movie-filter';
import Movies from './movies';

export default class Main extends Component {
  render() {
    return (
      <div className="main">
        <Movies />
        <MovieFilter />
      </div>
    )
  }
}
