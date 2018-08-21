import React from 'react';
import axios from 'axios';
import './Wine.css'

const Wine = props => {

  // const handleDeleteWine = e => {
  //   e.preventDefault()
  //
  //   const data = props.id
  //
  //   axios.delete('http://localhost:4741/wines',  data, { headers: {
  //     Authorization: `Bearer ${this.props.token}` } })
  //     // console.log(data)
  //     .then((result) => {
  //       console.log(result)
  //       console.log('wine added')
  //     })
  //     .catch((error) => {
  //       console.log(error)
  //     })
  //
  //     this.props.addWine(data.wine)
  //     console.log(data.wine)
  // }

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
        <button type="submit" id="delete-wine-button">Delete</button>
      </div>
      <div className="Wine-text">{props.comments}</div>

    </div>
  )
}

export default Wine;
