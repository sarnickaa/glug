import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import axios from 'axios';
import { Modal,ModalManager,Effect} from 'react-dynamic-modal'
import MyModal from "./MyModal.js"

import "./Login.css";
import Main from './Main.js'


export default class Login extends Component {

  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      token: ''
    }
  }

  openModal(text, data) {
        ModalManager.open(<MyModal text={text} onRequestClose={() => true} />);
     }

// like get-form-fields: captures user input and sets it as components state
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value
    this.setState(state)
  }

// form submission: sends the current state as the params for signup
// submission button fires off axios call
  onSubmit = (e) => {
    e.preventDefault()
    const { email, password } = this.state;
    console.log(this.state)


    axios.post('http://localhost:4741/sign-in', { email, password })
      .then((result) => {
        console.log(result)
        // this.props.setLoginInfo(result.data.user.token)
        this.setState({
          token: result.data.user.token
        })
        console.log(this.state.token)
        // localStorage.setItem('token', result.data.user.token)
        console.log(result.data.user.token)
        // console.log(localStorage.getItem('token'))
        this.props.history.push({
          pathname: '/main',
          state: { token: this.state.token }
        })
      // https://stackoverflow.com/questions/44121069/how-to-pass-params-with-history-push-in-react-router-v4
      })
      .catch(this.openModal.bind(null, "Oops! check your email or password!"))
      .catch((error) => {
        console.error(error)
      })
  }


  render() {
    const { email, password } = this.state;
    return (
    <div>
      <form className="Login-form" onSubmit={this.onSubmit}>
        <label>Log In to GLUG!</label>
        <br />
          <input type="email" placeholder="your email" name="email" value={email} onChange={this.onChange}></input>
          <br />
          <input type="password" placeholder="password" name="password" value={password} onChange={this.onChange}></input>
          <br />
            <button type="submit" id="login-button">Log In</button>
        </form>
      </div>
    );
  }
}
