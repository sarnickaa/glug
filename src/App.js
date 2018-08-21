import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import './App.css';
import Routes from "./Routes";
import Login from "./containers/Login";
// import axios from 'axios'

class App extends Component {
  // constructor(props) {
  //   super()
  //   this.state = {
  //     authInfo: {}
  //   }
  //   this.setLoginInfo = this.setLoginInfo.bind(this)
  // }

  // setLoginInfo(authData) {
  //   this.setState({
  //     authInfo: authData
  //   })
  // }

  render() {

    // const WrappedLogin = () => <Login setLoginInfo={this.state.setLoginInfo} />

    // declare variable
    // set variable based on condition - depending on state
    // state changes depending on what place

    // let registerlink
    //
    // if (!this.state.isOnPage) {
    //   registerLink (<ComponentToRender />)
    // } - put into render function to conditinally render component

    return (
      <div className="App container">
            <nav>
              <Link to="/" className="links" id="home-link">HOME</Link>
              {/* <Link to="/" className="links nav">logout</Link> */}
              {/* logout success should reroute user back to home page */}

              <Link to="/sign-up" className="links nav">register</Link>
              {/* mount Register User component */}

              <Link to="/sign-in" className="links nav">login</Link>
              {/* mount Login user component */}
            </nav>
        {/* <Routes> */}
          {/* <Route path='/sign-in' exact component={WrappedLogin} /> */}
        {/* </Routes> */}
        <Routes />
        {/* load routes */}
      </div>
    );
  }
}

export default App;
