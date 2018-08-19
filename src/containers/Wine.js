import React from 'react';
import './Wine.css'

const Wine = props => {
  return (
    <div className="Wine-div">
      <div className="Wine-header">
        <div className="Wine-name">ID: {props._id}</div>
        <div className="Wine-name">name: {props.name}</div>
        <div className="Wine-year">year: {props.year}</div>
        <div className="Wine-varietal">varietal: {props.varietal}</div>
        <div className="Wine-gift">gift?: {props.gift}</div>
        <div className="Wine-price">price: ${props.price}</div>
        <div className="Wine-score">score: {props.score}/10</div>
      </div>
      <div className="Wine-text">{props.comments}</div>
    </div>
  )
}

export default Wine;
