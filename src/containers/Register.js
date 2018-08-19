import React, { Component } from "react";
import axios from 'axios';
import "./Register.css";

export default class Register extends Component {

  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      password_confirmation: ''
    }
  }

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value
    this.setState(state)
  }

  onSubmit = (e) => {
    e.preventDefault()

    const { email, password, password_confirmation } = this.state

    axios.post('http://localhost:4741/sign-up', { email, password, password_confirmation })
      .then((result) => {
        console.log(result)
        // how do i redirect to /login on success here?
        this.props.history.push('/sign-in')
      })
      .catch((error) => {
        console.error(error)
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
            <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}

// const TweetForm = props => {
//
//   const tweetSubmit = e => {
//     // e = event = the submission of the form
//     e.preventDefault()
//     const message = e.target.querySelector('textarea').value
//     // e.target = targeting the element that caused the e event
//     props.addTweet(message)
//     // props because the addTweet method was passed as a prop to the TweetForm component
//     console.log(message)
//     // logic to add tweet to list of tweets
//   }
