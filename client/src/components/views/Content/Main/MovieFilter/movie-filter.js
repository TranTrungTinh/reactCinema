import React, { Component } from 'react'
import FilterGroup from './filter-group';

export default class MovieFilter extends Component {
  render() {
    return (
      <div className="movie-filter">
        <h2>Filter results</h2>
        
        <h3>By time of day</h3>
        <FilterGroup title="Before 6px" />
        <FilterGroup title="After 6px" />
        
        <h3>By genre</h3>
        <FilterGroup title="Animation" />
        <FilterGroup title="Comedy" />
        <FilterGroup title="Crime" />
        <FilterGroup title="Documentary" />
        <FilterGroup title="Drama" />
        <FilterGroup title="Fantacy" />
        <FilterGroup title="Honor" />
        
      </div>
    )
  }
}
