import React, { Component } from "react";
import axios from 'axios';
import "./Login.css";

export default class Login extends Component {

  constructor() {
    super()
    this.state = {
      email: '',
      password: ''
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
        localStorage.setItem('token', result.data.user.token)
        console.log(result.data.user.token)
        console.log(localStorage.getItem('token'))
        // TODO some sort of logic rerouting user to 'main' page
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
      </div>
    );
  }
}
