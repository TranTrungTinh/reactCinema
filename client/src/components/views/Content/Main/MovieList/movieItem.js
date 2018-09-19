import React from 'react';
import { Link } from 'react-router-dom';
import SessionTime from './session-time';

export default (props) => {
  return (
    <div className="movie">
      <div className="movie-col-left">
        <Link to={`/movie/${props.imdbID}`}>
          <img src={props.Poster} alt="" />
        </Link>
      </div>
      <div className="movie-col-right">
        <div className="movie-title">
          <Link to={`/movie/${props.imdbID}`}>
            <h2>{props.Title} ({props.Year})</h2>
          </Link>
          <span className="movie-rating">{props.Rated}</span>
        </div>
        <div className="movie-sessions">
          {props.sessions[props.day].map((e,i) => <SessionTime key={i} {...e}/>)}
        </div>
      </div>
    </div>
  )
}
