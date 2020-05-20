import React from "react";
import {Switch, Route} from "react-router-dom";
import {Layout} from "antd";
import {Parks} from "../pages/parks/Parks";
import {Sidebar} from "../components/sidebar";
import {HeaderComponent} from "../components/header";
const {Content} = Layout;

export const App = () => {
  return (
    <div className="App">
      <Layout>
        <Sidebar />
        <Layout>
          <HeaderComponent />
          {/*content*/}
          <Content className="content">
            <Switch>
              <Route path="/">
                <Parks />
              </Route>
            </Switch>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};
