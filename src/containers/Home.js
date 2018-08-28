import React, { Component } from "react";
// import image from "material-ui-image"

import "./Home.css";
import Logo from '../images/glug-logo.png'

export default class Home extends Component {

  render() {
    return (
      <div className="Home">
        <div className="lander">
          <img className="responsive" src={Logo} />
        </div>
      </div>
    );
  }
}
