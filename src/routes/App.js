import React from "react";
import {Provider} from "mobx-react";
import store from "../store";
import {BrowserRouter as Router, Switch} from "react-router-dom";
import {PrivateRouter} from "./index";

export const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Switch>
            <PrivateRouter />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
};
