import React from "react";
import {Provider} from "mobx-react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {App} from "./App";
import {Login} from "../pages/Login";
import store from "../store";

export default function Routes() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/">
            <App />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}
