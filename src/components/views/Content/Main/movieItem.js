import React from 'react'

export default () => {
  return (
    <div className="movie">
      <div className="movie-col-left">
        <a href=".#">
          <img src="https://images-na.ssl-images-amazon.com/images/M/MV5BMTQxMjMzMTczM15BMl5BanBnXkFtZTcwNzg5MzUyMQ@@._V1_SX300.jpg" alt="" />
        </a>
      </div>
      <div className="movie-col-right">
        <div className="movie-title">
          <a href=".#">
            <h2>The Coperations</h2>
          </a>
          <span className="movie-rating">PG-13</span>
        </div>
        <div className="movie-sessions">
          <div className="session-time-wrapper tooltip-wrapper">
            <div className="session-time">3:15 PM</div>
            <span className="tooltip tooltip-show">Seats able: 180</span>
          </div>
          <div className="session-time-wrapper tooltip-wrapper">
            <div className="session-time">5:15 PM</div>
            <span className="tooltip">Seats able: 250</span>
          </div>
        </div>
      </div>
    </div>
  )
}
