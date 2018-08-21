import React, { Component } from "react";
import axios from 'axios';
// import Modal, {closeStyle} from 'simple-react-modal'
import "./AddWineForm.css";

export default class AddWineForm extends Component {

  constructor(props) {
    console.log(props)
    super(props)
  }
  // static getDerivedStateFromProps(props, state) {
  //   console.log(props.wines)
  // }

// event handler for form submit
handleAddWine = e => {
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
  // for(let pair of data.entries()) {
  //    console.log(pair[0]+ ', '+ pair[1]);
  // }

  axios.post('http://localhost:4741/wines',  data, { headers: {
    Authorization: `Bearer ${this.props.token}` } })
    // console.log(data)
    .then((result) => {
      console.log(result)
      console.log('wine added')
    })
    .catch((error) => {
      console.log(error)
    })

    this.props.addWine(data.wine)
    console.log(data.wine)
}

  render() {
    return (
    <div>
      <form className="AddWine-form" onSubmit={this.handleAddWine}>
      <div id="label">
        <label>Add Wine</label>
        <br />
        </div>

        <div className="divide">
          {/* <input type="text" placeholder="id" name="id"></input> */}
          <br />
          <input type="text" id="name" placeholder="name" name="name"></input>
          <br />
          <input type="text" id="varietal" placeholder="varietal" name="varietal"></input>
          <br />
          </div>

          <div className="divide">
          <input type="text" id="year" placeholder="year" name="year"></input>
          <br />
          <input type="text" id="gift" placeholder="gift?" name="gift"></input>
          <br />
          <input type="text" id="price" placeholder="price" name="price"></input>
          <br />
          <input type="text"  id="score" placeholder="score" name="score"></input>
          <br />
          </div>
          <input type="textarea" id="comments" maxLength="140" placeholder="comments" name="comments"></input>
          <br />

          <div className="divide">
            <button type="submit">Add</button>
            <br />
            <button type="submit">Update</button>
            </div>
        </form>
      </div>
    );
    }
  }


// export default AddWineForm
