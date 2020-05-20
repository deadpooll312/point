import React, {useCallback, useEffect, useState} from "react";
import "antd/dist/antd.css";
import "./styles/main.scss";
import {Layout} from "antd";

const {Header, Content, Sider} = Layout;

function App() {
  const [small, setSmall] = useState(true);
  const click = useCallback((value) => {
    document.documentElement.setAttribute("data-theme", value ? "dark" : "");
  }, []);

  useEffect(() => {
    console.log("small");
  }, [small]);

  return (
    <div className="App">
      <Layout>
        <Sider className={small ? "small" : ""}>
          <div className="sider-header"></div>
        </Sider>
        <Layout>
          <Header onClick={() => setSmall(!small)}>Header</Header>
          <Content onClick={() => click(false)} className="content">
            Content
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
