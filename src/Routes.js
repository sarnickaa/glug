import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Register from "./containers/Register";
import Login from "./containers/Login";
import Main from "./containers/Main";

export default (props) => {


  return (
    <Switch>
      {/* <Route path="/" exact render={(routeProps) => <Home setViewLinkState={props.setViewLinkState} viewLinkState={props.viewLinkState} {...routeProps}/>} /> */}
      <Route path="/" exact component={Home} />
      <Route path="/sign-up" exact component={Register} />
      <Route path="/sign-in" exact component={Login} />
      {/* <Route path="/sign-in" render={(props) => <Login {...props} setViewLinkState={props.setViewLinkState} viewLinkState={props.viewLinkState} />} /> */}
      {/* <Route path="/main" exact component={Main} /> */}
      {/* <Route path="/main" render={() => (<Main location={props.location} setViewLinkState={props.setViewLinkState} viewLinkState={props.vewLinkState} />)} /> */}
      <Route path="/main" render={(routeProps) => <Main setViewLinkState={props.setViewLinkState} viewLinkState={props.viewLinkState} {...routeProps}/>} />
    </Switch>
  )
}
