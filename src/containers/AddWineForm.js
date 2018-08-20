import React, { Component } from "react";
import axios from 'axios';
// import Modal, {closeStyle} from 'simple-react-modal'
import "./AddWineForm.css";

export default class AddWineForm extends Component {

  constructor(props) {
    console.log(props)
    super(props)
    // this.state = {
    //   wines: props.wines
    // }
  }
  // static getDerivedStateFromProps(props, state) {
  //   console.log(props.wines)
  // }

// event handler for form submit
handleAddWine = e => {
  e.preventDefault()
  const data = new FormData(e.target)
  console.log(data)
  for(let pair of data.entries()) {
     console.log(pair[0]+ ', '+ pair[1]);
  }
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
          <input type="text" placeholder="id" name="id"></input>
          <br />
          <input type="text" placeholder="name" name="name"></input>
          <br />
          <input type="text" placeholder="varietal" name="varietal"></input>
          <br />
          </div>

          <div className="divide">
          <input type="text" placeholder="year" name="year"></input>
          <br />
          <input type="text" placeholder="gift?" name="gift"></input>
          <br />
          <input type="text" placeholder="price" name="price"></input>
          <br />
          <input type="text" placeholder="score" name="score"></input>
          <br />
          </div>
          <input type="textarea" maxLength="140" placeholder="comments" name="comments"></input>
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
