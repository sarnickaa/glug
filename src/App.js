import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Route, Switch } from "react-router-dom";

import './App.css';
import Routes from "./Routes";
import Login from "./containers/Login";

class App extends Component {

  render() {

    return (
      <div className="App container">
            <nav>
              <Link to="/" className="links" id="home-link">HOME</Link>
              {/* logout success should reroute user back to home page */}

              <Link to="/sign-up" className="links nav">register</Link>
              {/* mount Register User component */}

              <Link to="/sign-in" className="links nav">login</Link>
              {/* mount Login user component */}
            </nav>
        <Routes />
        {/* load routes */}
      </div>
    );
  }
}

export default App;
