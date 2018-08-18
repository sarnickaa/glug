import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Register from "./containers/Register";
import Login from "./containers/Login";

export default () =>
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/sign-up" exact component={Register} />
    <Route path="/sign-in" exact component={Login} />
  </Switch>;
