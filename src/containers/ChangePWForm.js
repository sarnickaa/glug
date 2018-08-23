import React, { Component } from "react";
import axios from 'axios';
import { apiUrl } from '../server.js'
// import Modal, {closeStyle} from 'simple-react-modal'
import "./ChangePWForm.css";
import { Modal,ModalManager,Effect} from 'react-dynamic-modal'
import MyModal from "./MyModal.js"

export default class ChangePWForm extends Component {

  constructor(props) {
    super()
    // console.log(props)
    // console.log(props.token)
    this.state = {
      oldp: '',
      newp: '',
      token: props.token
    }
  }


  openModal(text, data) {
        ModalManager.open(<MyModal text={text} onRequestClose={() => true} />);
     }

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value
    this.setState(state)
  }

// form submission: sends the current state as the params for change password
// submission button fires off axios call
  onSubmit = (e) => {
    e.preventDefault()
    const { oldp, newp } = this.state;
    // console.log(this.state)
    this.userChangePW()
  }

  clearControlledFields = () => {
    this.setState({
      oldp: "",
      newp: ""
    })
  }
  // https://stackoverflow.com/questions/43922508/clear-and-reset-form-input-fields/43922523

  userChangePW = (e) => {
    // console.log(this.state.token)
    const { oldp, newp } = this.state
    // console.log(oldp)
    // console.log(newp)
    axios.patch(`${apiUrl}/change-password`, { oldp, newp }, { headers: {
      Authorization: `Bearer ${this.state.token}` } })
        .then((result) => {
          // console.log(result)
          // console.log('user changed password')
          })
        .then(this.clearControlledFields)
        .then(this.openModal.bind(null, "Success! Password Changed!"))
        .catch(this.openModal.bind(null, "Oh No! Try Again"))
        .then(this.clearControlledFields)
  }
// https://stackoverflow.com/questions/32912459/promises-pass-additional-parameters-to-then-chain


  render() {
    const { oldp, newp } = this.state;
    return (
    <div>
      <form className="ChangePW-form" onSubmit={this.onSubmit}>
        <label>Change User Password</label>
        <br />
          <input type="password" placeholder="old password" name="oldp" value={this.state.oldp} onChange={this.onChange}></input>
          <br />
          <input type="password" placeholder="new password" name="newp" value={this.state.newp} onChange={this.onChange}></input>
          <br />
            <button type="submit">Change Password</button>
        </form>
      </div>
    );
  }
}
