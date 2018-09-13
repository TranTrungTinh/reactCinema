import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../../../../redux/actions';

import MovieItem from './movieItem';

class Movies extends Component {

  componentDidMount() {
    this.props.fetchMovieAction();
  }

  render() {
    return (
      <div className="movie-list">
        {this.props.movies.map(e => <MovieItem key={e._id} {...e}/>)}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  movies: state.movies
});


export default connect(mapStateToProps, actionCreators)(Movies);
