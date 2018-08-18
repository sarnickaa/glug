import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './App.css';
import Routes from "./Routes";

class App extends Component {
  render() {
    return (
      <div className="App container">
            <nav>
              <Link to="/" className="links" id="home-link">HOME</Link>
              <Link to="/" className="links nav">logout</Link>
              <Link to="/sign-up" className="links nav">register</Link>
              <Link to="/sign-in" className="links nav">login</Link>
            </nav>
        <Routes />
      </div>
    );
  }
}

export default App;
