import React, { Component } from "react";
import axios from 'axios';
// import Modal, {closeStyle} from 'simple-react-modal'
import "./WineForm.css";

export default class WineForm extends Component {

  constructor(props) {
    console.log(props)
    super(props)
  }
  // static getDerivedStateFromProps(props, state) {
  //   console.log(props.wines)
  // }

  // event handler for form submit

  cancelCourse = () => {
    document.getElementById("wine-input-form").reset();
  }



  handleWineDataSubmit = e => {
    e.preventDefault()
    // const data = new FormData(e.target)
    // console.log(data)
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

    console.log(data)
    // for(let pair of data.entries()) {
    //    console.log(pair[0]+ ', '+ pair[1]);
    // }

    if (this.props.action === 'Add') {
      this.addWine(data)
        .then((result) => {
          console.log(result)
          console.log('wine added')
        })
        .then(this.props.wineRequest)
        .then(this.cancelCourse)
        .catch((error) => {
          console.log(error)
        })
    }

    if (this.props.action === 'Update') {
      this.patchWine(data)
        .then((result) => {
          console.log(result)
          console.log('wine edited')
        })
        .then(this.cancelCourse)
        .then(this.props.wineRequest)
        .then(this.props.setCurrentFormWineID(null))
        .catch((error) => {
          console.log(error)
        })
    }
  }

  addWine = (data) => {
    return axios.post('http://localhost:4741/wines', data, {
      headers: {
        Authorization: `Bearer ${this.props.token}`
      }
    })
  }

  patchWine = (data) => {
    // console.log(this.props.currentFormWineID)
    return axios.patch(`http://localhost:4741/wines/${this.props.currentFormWineID}`, data, {
      headers: {
        Authorization: `Bearer ${this.props.token}`
      }
    })
  }

  //     // console.log(data)
  //     .then((result) => {
  //       console.log(result)
  //       console.log('wine added')
  //     })
  //     .catch((error) => {
  //       console.log(error)
  //     })
  //
  //     this.props.wineRequest(data.wine)
  //     console.log(data.wine)
  // }

  render() {
    return (
      <div>
        <form id="wine-input-form" className="AddWine-form" onSubmit={this.handleWineDataSubmit}>
          <div id="label">
            <label>{this.props.action === "Add"
              ? this.props.prefix
              : `${this.props.currentFormWineID} - ${this.props.action}`} Wine
        </label>
            <br />
          </div>

          <div className="divide">
            {/* <input type="text" placeholder="id" name="id"></input> */}
            <input type="text" id="name" placeholder="wine name (required)" name="name"></input>
            <br />
            <input type="text" id="varietal" placeholder="varietal (required)" name="varietal"></input>
            <br />
            <input type="text" id="year" placeholder="vintage (required)" name="year"></input>
            <br />
          </div>

          <div className="divide">

            <input type="text" id="gift" placeholder="was this a gift?" name="gift"></input>
            <br />
            <input type="text" id="price" placeholder="price" name="price"></input>
            <br />
            <input type="text" id="score" placeholder="score /10" name="score"></input>
            <br />
          </div>
          <textarea type="textarea" id="comments" maxLength="140"  placeholder="comments" name="comments"></textarea>
          <br />

          <div className="divide">
            <button type="submit" id="wine-form-button">{this.props.action}</button>
          </div>
        </form>
      </div>
    );
  }
}


// export default WineForm
