import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actionCreators from '../../../redux/actions';
import './detail.css';

class Detail extends Component {

  componentDidMount() {
    const { imdbID } = this.props.match.params;
    this.props.fetchDetailMovieAction(imdbID);
  }

  render() {
    const { movie } = this.props;
    return (
      <div className="details">
        <div className="movie">
          <div className="movie-col-left">
            <Link to={`/movie/${movie.imdbID}`}>
              <img src={movie.Poster} alt={movie.Title} />
            </Link>
          </div>
          <div className="movie-col-right">
            <div className="movie-title">
              <Link to={`/movie/${movie.imdbID}`}>
                <h2>{movie.Title} ({movie.Year})</h2>
              </Link>
              <span className="movie-rating">{movie.Rated}</span>
            </div>
            <div className="movie-details">
              <p className="movie-genre">{movie.Genre}</p>
              <p className="movie-plot">{movie.Plot}</p>
              <table>
                <tbody>
                  <tr>
                    <td>Released date:</td>
                    <td>{movie.Released}</td>
                  </tr>
                  <tr>
                    <td>Running time:</td>
                    <td>{movie.Runtime}</td>
                  </tr>
                  <tr>
                    <td>Director:</td>
                    <td>{movie.Director}</td>
                  </tr>
                  <tr>
                    <td>Cast:</td>
                    <td>{movie.Actors}</td>
                  </tr>
                  <tr>
                    <td>IMDB Point:</td>
                    <td>
                      <span className="movie-imdbRating">{movie.imdbRating}</span>
                      <span>  ({movie.imdbVotes} votes)</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="home">
          <Link to="/">&larr; Back to results</Link>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  movie: state.movie
});

export default connect(mapStateToProps, actionCreators)(Detail);
