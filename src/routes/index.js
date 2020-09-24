import React from "react";
import {Provider} from "mobx-react";
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import {App} from "./App";
import store from "../store";
import {Login} from "../pages/login/Login";

// eslint-disable-next-line react/prop-types
function PrivateRoute({children, ...props}) {
  const userInfo = localStorage.userInfo;

  if (userInfo && JSON.parse(userInfo)) {
    return <Route {...props} render={() => children} />;
  }

  return <Redirect to="/login" />;
}

export default function Routes() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <PrivateRoute exact path="/">
            <App />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}
