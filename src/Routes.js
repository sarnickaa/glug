import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Register from "./containers/Register";
import Login from "./containers/Login";
import Main from "./containers/Main";

export default (props) =>
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/sign-up" exact component={Register} />
    {/* <Route path="/sign-in" exact component={Login} /> */}
    {/* <Route path="/sign-in" render={(props) => <Login {...props} setLoginInfo={this.state.setLoginInfo} />} /> */}
    <Route path="/main" exact component={Main} />
  </Switch>;
