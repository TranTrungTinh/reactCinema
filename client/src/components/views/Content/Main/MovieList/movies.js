import React, { Component } from 'react'; 
import { connect } from 'react-redux';
import MovieItem from './movieItem';


class Movies extends Component {

  formatDay = () => {
    return this.props.selected.format('ddd');
  }

  notifyFilteredMovie = () => {
    const { movies, fitered } = this.props;
    if(movies.length) 
      return movies.map(e => <MovieItem key={e._id} {...e} day={this.formatDay()}/>);
    return (<h3 style={{ color: 'white' }}>No results for {fitered.join(', ')}.</h3>);
  };

  render() {
    return (
      <div className="movie-list">
        {this.notifyFilteredMovie()}
      </div>
    )
  }
}
const mapStateToProps = state => ({
  ...state.selectedDayReducer
})
export default connect(mapStateToProps)(Movies);
