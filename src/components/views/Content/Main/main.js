import React, { Component } from 'react';

import MovieFilter from './movie-filter';

export default class Main extends Component {
  render() {
    return (
      <div className="main">
        <div className="movie-list"></div>
        <MovieFilter />
      </div>
    )
  }
}
