import React from "react";
import {Provider} from "mobx-react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {App} from "./App";
import store from "../store";
import {Login} from "../pages/login/Login";

export default function Routes() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/">
            <App />
          </Route>
          <Route path="/login">
            {/*<div className="login-form-wrap-container">*/}
            {/* */}
            {/*</div>*/}
            <Login />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}
