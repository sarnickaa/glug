import React, { Component } from "react";
import axios from 'axios';
import { Modal,ModalManager,Effect} from 'react-dynamic-modal'
import { apiUrl } from '../server.js'

import "./Register.css";
import MyModal from "./MyModal.js"

export default class Register extends Component {

  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      password_confirmation: ''
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

  onSubmit = (e) => {
    e.preventDefault()

    const { email, password, password_confirmation } = this.state

    axios.post(`${apiUrl}/sign-up`, { email, password, password_confirmation })
      .then((result) => {
        console.log(result)
        this.props.history.push('/sign-in')
        //immediatley route to login on success
      })
      .catch(this.openModal.bind(null, "Oops! check your email or password!"))
      .catch((error) => {
        // console.error(error)
      })
  }

  render() {
    const { email, password, password_confirmation } = this.state
    return (
    <div>
      <form className="Register-form" onSubmit={this.onSubmit}>
        <label>Sign Up for GLUG!</label>
        <br />
          <input type="email" placeholder="your email" name="email" value={email} onChange={this.onChange}></input>
          <br />
          <input type="password" placeholder="password" name="password" value={password} onChange={this.onChange}></input>
          <br />
          <input type="password" placeholder="confirm password" name="password_confirmation" value={password_confirmation} onChange={this.onChange}></input>
          <br />
            <button type="submit" id="register-button">Register</button>
        </form>
      </div>
    );
  }
}
