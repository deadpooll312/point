import React from "react";
import {Provider} from "mobx-react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {App} from "./App";
import {LoginForm} from "../pages/parks/Login";
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
            <div className="login-form-wrap-container">
              <LoginForm />
            </div>
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}
