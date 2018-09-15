import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../../../redux/actions';

import MovieFilter from './MovieFilter/movie-filter';
import Movies from './MovieList/movies';
import Loading from '../../Loading/loading';

class Main extends Component {

  componentDidMount() {
    this.props.fetchMovieAction()
  }

  render() {
    const { movies } = this.props;
    return (
      <div className="main">
        {this.props.isLoading ? <Loading /> : <Movies movies={movies} />}
        <MovieFilter />
      </div>
    )
  }
}

const mapStateToProps = state => ({...state.movieReducer});

export default connect(mapStateToProps, actionCreators)(Main);
