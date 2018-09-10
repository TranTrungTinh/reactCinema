import React, { Component } from 'react'
import MovieItem from './movieItem';

export default class Movies extends Component {
  render() {
    return (
      <div className="movie-list">
        <MovieItem />
        <MovieItem />
      </div>
    )
  }
}
