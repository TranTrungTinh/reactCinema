import React, { Component } from 'react';
import * as actionCreators from '../../../../../redux/actions';
import { connect } from 'react-redux';

class FilterGroup extends Component {

  state = {isActive: false}

  isActiveFilter = () => {
    this.setState({isActive: !this.state.isActive});
    this.props.filteredMoviesAction(this.props.title);
  }

  render() {
    const classJSX = this.state.isActive ? "check-filter active" : "check-filter";
    return (
      <div className="filter-group">
        <div className={classJSX} onClick={this.isActiveFilter}>
          <span className="checkbox"></span>
          <span className="check-filter-title">{this.props.title}</span>
        </div>
      </div>
    )
  }
}

export default connect(null, actionCreators)(FilterGroup);

