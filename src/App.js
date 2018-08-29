import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';


import './App.css';
import Routes from "./Routes";
import Login from "./containers/Login";

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      viewLink: 'view',
      loggedInEmail: 'hihi'
    }
  }

  setViewLinkState = (newState) => {
    this.setState({viewLink: newState})
  }

  setLoggedInEmail = (email) => {
    this.setState({loggedInEmail: email})
  }

  getLoggedInEmail = () => {
    return this.state.loggedInEmail
  }

  render() {
    if(this.state.viewLink === 'view') {
    return (
      <div className="App container">
        <AppBar position="sticky" className="background">
            <nav>
              {/* <Link to="/" className="links" id="home-link">HOME</Link> */}
              {/* logout success should reroute user back to home page */}
              <Link to="/sign-up" className="links nav">register</Link>
              {/* mount Register User component */}
              <Link to="/sign-in" className="links nav">login</Link>
              {/* mount Login user component */}
            </nav>
          </AppBar>
        <Routes setViewLinkState={this.setViewLinkState} viewLinkState={this.state.viewLink} setLoggedInEmail={this.setLoggedInEmail} getLoggedInEmail={this.getLoggedInEmail} />
        {/* load routes and pass view state and setter method as props */}
      </div>
    );
  } else {
    return (
      <div className="App container">
        {/* <AppBar position="sticky" className="background"> */}
            <nav>
              <Link to="/gallery" className="links nav" id="gallery" >Gallery</Link>

              {/* hide login/logout links */}
              {/* <Link to="/" className="links" id="home-link">HOME</Link> */}
              {/* logout success should reroute user back to home page */}

              {/* <Link to="/sign-up" className="links nav">register</Link> */}
              {/* mount Register User component */}

              {/* <Link to="/sign-in" className="links nav">login</Link> */}
              {/* mount Login user component */}
            </nav>
            {/* </AppBar> */}
        <Routes setViewLinkState={this.setViewLinkState} viewLinkState={this.state.viewLink} setLoggedInEmail={this.setLoggedInEmail} getLoggedInEmail={this.getLoggedInEmail} />
        {/* load routes and pass view state and setter method as props so they're available in <Main /> */}
      </div>
    )
  }
  }
}

export default App;
