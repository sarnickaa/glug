import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import axios from 'axios';
import { Modal,ModalManager,Effect} from 'react-dynamic-modal'
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';

import MyModal from "./MyModal.js"
import "./Login.css";
import Main from './Main.js'
import { apiUrl } from '../server.js'


export default class Login extends Component {

  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      token: ''
    }
  }

  clearControlledFields = () => {
    this.setState({
      email: "",
      password: ""
    })
  }

  openModal(text, data) {
        ModalManager.open(<MyModal text={text} onRequestClose={() => true} />);
     }
// modal getter method

// like get-form-fields: captures user input and sets it as this components state
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value
    this.setState(state)
  }

// form submission: sends the current state as the params for signup
// submission button triggers axios call
  onSubmit = (e) => {
    e.preventDefault()
    const { email, password } = this.state;
    // console.log(this.state)


    axios.post(`${apiUrl}/sign-in`, { email, password })
      .then((result) => {
        // console.log(result)
        this.setState({
          token: result.data.user.token
        })
        // console.log(this.state.token)
        // localStorage.setItem('token', result.data.user.token) - do not use for react apps - should be set in state and passed.
        // console.log(result.data.user.token)
        // console.log(localStorage.getItem('token'))
        this.props.history.push({
          pathname: '/main',
          state: { token: this.state.token }
        })
      // https://stackoverflow.com/questions/44121069/how-to-pass-params-with-history-push-in-react-router-v4
      })
      .then(this.clearControlledFields)
      .catch(this.openModal.bind(null, "Oops! Check your email or password!"))
      .catch((error) => {
        console.error(error)
      })
      .then(this.clearControlledFields)
  }


  render() {
    const { email, password } = this.state;
    return (
    <div>
    <Card className="Login-form" style={{background: 'linear-gradient(to bottom, #243b55 0%, #843640 100%'}}>
      <form onSubmit={this.onSubmit}>
        <label><h3>Log In to GLUG!</h3></label>
        <br />
          <input type="email" placeholder="your email" name="email" value={email} onChange={this.onChange}></input>
          <br />
          <input type="password" placeholder="password" name="password" value={password} onChange={this.onChange}></input>
          <br />
            <Button type="submit" id="login-button">Log In</Button>
        </form>
        </Card>
      </div>
    );
  }
}
