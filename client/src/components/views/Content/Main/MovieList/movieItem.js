import React from 'react'
import SessionTime from './session-time';

export default (props) => {
  return (
    <div className="movie">
      <div className="movie-col-left">
        <a href=".#">
          <img src={props.Poster} alt="" />
        </a>
      </div>
      <div className="movie-col-right">
        <div className="movie-title">
          <a href=".#">
            <h2>{props.Title}</h2>
          </a>
          <span className="movie-rating">{props.Rated}</span>
        </div>
        <div className="movie-sessions">
          <SessionTime />
        </div>
      </div>
    </div>
  )
}
