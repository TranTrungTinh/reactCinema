import React, { Component } from 'react';

import MovieFilter from './MovieFilter/movie-filter';
import Movies from './MovieList/movies';

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
