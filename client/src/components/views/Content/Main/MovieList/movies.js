import React from 'react'
import MovieItem from './movieItem';

export default (props) => {
  return (
    <div className="movie-list">
        {props.movies.map(e => <MovieItem key={e._id} {...e}/>)}
      </div>
  )
}
