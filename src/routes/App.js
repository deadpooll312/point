import React from "react";
import {Switch, Route} from "react-router-dom";
import {Layout} from "antd";
import {Parks} from "../pages/parks/Parks";
import {Sidebar} from "../components/sidebar";
import {HeaderComponent} from "../components/header";
import {inject, observer} from "mobx-react";
import {getStorage} from "../services/storage.service";
import {theme} from "../consts/storage.conts";
const {Content} = Layout;

export const App = inject("store")(
  observer(({store: {sidebar}}) => {
    document.querySelector("html").setAttribute("theme", getStorage(theme) ? "dark" : "");
    return (
      <div className="App">
        <Layout>
          <Sidebar />
          <Layout className={`parks-content ${sidebar.showBar ? "no-margin" : ""}`}>
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
  })
);
