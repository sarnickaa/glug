import React, { Component } from "react";
import axios from 'axios';
import { Modal,ModalManager,Effect} from 'react-dynamic-modal'
import { apiUrl } from '../server.js'
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';

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

  clearControlledFields = () => {
    this.setState({
      email: "",
      password: "",
      password_confirmation: ""
    })
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
      .then(this.clearControlledFields)
      .catch(this.openModal.bind(null, "Oops! check your email or password!"))
      .catch((error) => {
        // console.error(error)
      })
      .then(this.clearControlledFields)
  }

  render() {
    const { email, password, password_confirmation } = this.state
    return (
    <div>
      <Card className="Register-form" style={{background: 'linear-gradient(to bottom, #ff9a9e 0%, #843640 100%'}}>
      <form onSubmit={this.onSubmit}>
        <label><h3>Sign Up for GLUG!</h3></label>
        <br />
            <TextField type="email" label="email" placeholder="your email" name="email" value={email} onChange={this.onChange}></TextField>
          <br />
          <TextField type="password" label="password" placeholder="password" name="password" value={password} onChange={this.onChange}></TextField>
          <br />
          <TextField type="password" label="confirm password" placeholder="confirm password" name="password_confirmation" value={password_confirmation} onChange={this.onChange}></TextField>
          <br />
            <Button type="submit" id="register-button">Register</Button>
        </form>
      </Card>
      </div>
    );
  }
}
