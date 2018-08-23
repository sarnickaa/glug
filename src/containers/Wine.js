import React from 'react';
import axios from 'axios';
import { apiUrl } from '../server.js'
import { Modal,ModalManager,Effect} from 'react-dynamic-modal'

import MyModal from "./MyModal.js"
import './Wine.css'

const Wine = props => {

  const clickUpdateHandler = e => {
    props.setCurrentFormWineID(props._id)
  }

  const openModal = (text, data) => {
        ModalManager.open(<MyModal text={text} onRequestClose={() => true} />);
     }

  const handleDeleteWine = e => {
    e.preventDefault()

    axios.delete(`${apiUrl}/wines/${props._id}`, { headers: {
      Authorization: `Bearer ${props.token}` } })
      // console.log(data)
      .then((result) => {
        console.log(result)
        console.log('wine deleted')
      })
      .then(openModal.bind(null, "bye bye wine!"))
      .then(props.wineRequest)
      // triggers axios GET request to re-render the users wine collection
      .catch((error) => {
        console.log(error)
      })
  }

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
        <button type="submit" id="delete-wine-button" onClick={handleDeleteWine}>Delete</button>
        <button type="submit" id="delete-wine-button" onClick={clickUpdateHandler}>Update</button>
      </div>
      <div className="Wine-text">{props.comments}</div>
    </div>
  )
}

export default Wine;
