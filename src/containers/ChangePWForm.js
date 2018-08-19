import React, { Component } from "react";
import axios from 'axios';
// import Modal, {closeStyle} from 'simple-react-modal'
import "./ChangePWForm.css";

export default class ChangePWForm extends Component {

  render() {

    return (
    <div>
      <form className="ChangePW-form">
        <label>Change User Password</label>
        <br />
          <input type="email" placeholder="your email" name="email"></input>
          <br />
          <input type="email" placeholder="your email" name="email"></input>
          <br />
            <button type="submit">Change Password</button>
        </form>
      </div>
    );
  }
}
