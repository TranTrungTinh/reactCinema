import React from 'react'

export default (props) => {
  return (
    <div className="filter-group">
      <div className="check-filter">
        <span className="checkbox"></span>
        <span className="check-filter-title">{props.title}</span>
      </div>
    </div>
  )
}
