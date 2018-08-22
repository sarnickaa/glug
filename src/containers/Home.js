import React, { Component } from "react";
import "./Home.css";
import Logo from '../images/glug-logo.png'

export default class Home extends Component {
  
  render() {
    return (
      <div className="Home">
        <div className="lander">
          <img src={Logo} />
          <h2>wineTracker</h2>
          {/* eventually have hero image? */}
        </div>
      </div>
    );
  }
}
