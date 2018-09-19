import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../../../redux/actions';

import MovieFilter from './MovieFilter/movie-filter';
import Movies from './MovieList/movies';
import Loading from '../../Loading/loading';

class Main extends Component {

  componentDidMount() {
    this.props.fetchMovieAction();
  }

  moviePassedGenreFilter = (movie) => {
    const { movieFilter } = this.props;
    if(!movieFilter.length) return true;
    return movieFilter.find(genre => movie.Genre.includes(genre))
  }
  
  filteredMovies = () => {
    return this.props.movies.filter(this.moviePassedGenreFilter);
  }

  render() {
    const { movieFilter } = this.props;
    return (
      <div className="main">
        {this.props.isLoading ? <Loading /> : 
          <Movies movies={this.filteredMovies()} fitered={movieFilter} />}
        <MovieFilter />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  ...state.movieReducer,
  movieFilter: state.filteredMovie
});

export default connect(mapStateToProps, actionCreators)(Main);
