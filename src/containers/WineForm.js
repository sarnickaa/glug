import React, { Component } from "react";
import axios from 'axios';
import { apiUrl } from '../server.js'
import { Modal,ModalManager,Effect} from 'react-dynamic-modal'
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


import "./WineForm.css";
import MyModal from "./MyModal.js"

export default class WineForm extends Component {

  constructor(props) {
    console.log(props)
    super(props)
  }

  cancelCourse = () => {
    document.getElementById("wine-input-form").reset();
  }

  openModal(text, data) {
        ModalManager.open(<MyModal text={text} onRequestClose={() => true} />);
     }

  handleWineDataSubmit = e => {
    e.preventDefault()
    const data = {
      wine: {
        name: e.target.querySelector("#name").value,
        varietal: e.target.querySelector("#varietal").value,
        year: e.target.querySelector("#year").value,
        gift: e.target.querySelector("#gift").value,
        price: e.target.querySelector("#price").value,
        score: e.target.querySelector("#score").value,
        comments: e.target.querySelector("#comments").value
      }
    }

    // for FormData: for(let pair of data.entries()) {
    //               console.log(pair[0]+ ', '+ pair[1]);}

    if (this.props.action === 'Add') {

      this.addWine(data)
        .then((result) => {
          console.log(result)
          console.log('wine added')
        })
        .then(this.props.wineRequest)
        .then(this.openModal.bind(null, "yay! wine added!"))
        .then(this.cancelCourse)
        .catch((error) => {
          console.log(error)
        })
        .catch(this.openModal.bind(null, "Oops! something went wrong!"))
    }

    if (this.props.action === 'Update') {
      this.patchWine(data)
        .then((result) => {
          console.log(result)
          console.log('wine edited')
        })
        .then(this.cancelCourse)
        .then(this.props.wineRequest)
        .then(this.openModal.bind(null, "yay! wine updated!"))
        .then(this.props.setCurrentFormWineID(null))
        .catch((error) => {
          console.log(error)
        })
        .catch(this.openModal.bind(null, "Oops! something went wrong!"))
    }
  }

  addWine = (data) => {
    return axios.post(`${apiUrl}/wines`, data, {
      headers: {
        Authorization: `Bearer ${this.props.token}`
      }
    })
  }

  patchWine = (data) => {
    // console.log(this.props.currentFormWineID)
    return axios.patch(`${apiUrl}/wines/${this.props.currentFormWineID}`, data, {
      headers: {
        Authorization: `Bearer ${this.props.token}`
      }
    })
  }

  render() {
    return (
      <div>
        <Card className="AddWine-form" style={{background: 'linear-gradient(to bottom, #ff9a9e 0%, #843640 100%'}}>
        <form id="wine-input-form" onSubmit={this.handleWineDataSubmit}>
          <div id="label">
            <label>{this.props.action === "Add"
              ? this.props.prefix
              : `${this.props.currentFormWineID} - ${this.props.action}`} Wine
        </label>
            <br />
          </div>

          <div className="divide">
            <TextField type="text" margin="normal" id="name" label="name-required" name="name"></TextField>
            <br />
            <TextField type="text" margin="normal" id="varietal" label="varietal-required" name="varietal"></TextField>
            <br />
            <TextField type="text" margin="normal" id="year" label="vintage-required" name="year"></TextField>
            <br />
          </div>

          <div className="divide">

            <TextField type="text" margin="normal" id="gift" label="was this a gift?" name="gift"></TextField>
            <br />
            <TextField type="text" margin="normal" id="price" label="price $" name="price"></TextField>
            <br />
            <TextField type="text" margin="normal" id="score" label="score out of 10" name="score"></TextField>
          </div>
          <div>
          <TextField multiline rows="2" rowsMax="4" margin="normal" id="comments" maxLength="140" label="comments" name="comments"></TextField>
          <br />
        </div>

          <div className="divide">
            <Button type="submit" id="wine-form-button">{this.props.action}</Button>
          </div>
        </form>
      </Card>
      </div>
    );
  }
}


// export default WineForm
