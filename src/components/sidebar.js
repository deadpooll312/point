import React from "react";
import {Layout} from "antd";
import {inject, observer} from "mobx-react";
import {Map} from "../icons/map";
const {Sider} = Layout;

export const Sidebar = inject("store")(
  observer(({store: {sidebar}}) => {
    return (
      <Sider className={sidebar.showBar ? "small" : ""}>
        <div className="sider-header">
        
        </div>
        <Map />
      </Sider>
    );
  })
);
