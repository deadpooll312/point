import React from "react";
import {Provider} from "mobx-react";
import store from "../store";
import {BrowserRouter as Router, Switch} from "react-router-dom";
import {PrivateRouter} from "./index";
import {LOGIN, MAIN_SCREEN} from "../consts/routes.const";
import MainScreen from "../pages/MainScreen/MainScreen";
import {Login} from "../pages/login/Login";

export const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Switch>
            <PrivateRouter exact path={MAIN_SCREEN} component={MainScreen} />
            <PrivateRouter path={LOGIN} component={Login} />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
};
