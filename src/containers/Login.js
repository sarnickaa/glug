import React, { Component } from "react";
import axios from 'axios';
import "./Login.css";
import Main from './Main.js'
import { Route, Switch } from "react-router-dom";

export default class Login extends Component {

  constructor(props) {
    console.log(props)
    super(props)
    this.state = {
      email: '',
      password: '',
      token: ''
    }
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
        // this.props.history.push('/main')
        // <Main />
      })
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
            <button type="submit">Log In</button>
        </form>
        {this.state && this.state.token &&
        <Main />}
      </div>
    );
  }
}
