import React from 'react';
// import './Wine.css'

const Wine = props => {
  return (
    <div className="Wine-div">
      <div className="Wine-header">
        <span className="Wine-name">{props.name}</span>
        <span className="Wine-year">{props.year}</span>
        <span className="Wine-varietal">{props.varietal}</span>
        <span className="Wine-gift">{props.gift}</span>
        <span className="Wine-price">{props.price}</span>
        <span className="Wine-score">{props.score}</span>
      </div>
      <p className="Wine-text">{props.comments}</p>
    </div>
  )
}

export default Wine;
