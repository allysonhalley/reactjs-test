import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "../pages/Home";
import User from "../pages/User";

// import history from './history';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" render={(props) => <Home />} />
      <Route path="/user" render={(props) => <User {...props} />} />
    </Switch>
  </BrowserRouter>
);

export default Routes;