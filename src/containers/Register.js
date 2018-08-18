import React, { Component } from "react";
import "./Register.css";

export default class Register extends Component {
  render() {
    return (
    <div>
      <form className="Register-form">
        <label>Sign Up for GLUG!</label>
        <br />
          <input type="email" placeholder="your email"></input>
          <br />
          <input type="password" placeholder="password"></input>
          <br />
          <input type="password" placeholder="confirm password"></input>
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
