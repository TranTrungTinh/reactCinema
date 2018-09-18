import React from 'react'
import MovieItem from './movieItem';

export default (props) => {
  const notifyFilteredMovie = () => {
    const { movies, fitered } = props;
    if(movies.length) 
      return movies.map(e => <MovieItem key={e._id} {...e}/>);
    return (<h3 style={{ color: 'white' }}>No results for {fitered.join(', ')}.</h3>);
  };

  return (
    <div className="movie-list">
      {notifyFilteredMovie()}
    </div>
  )
}
