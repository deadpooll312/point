import React from "react";
import {Avatar} from "antd";
import {UserOutlined} from "@ant-design/icons";
import {ForestIcon} from "../../icons/forest.icon";

export const SidebarHeader = ({auth: {firstName, lastName}}) => {
  return (
    <div className="sider-header">
      <div className="logo">
        <ForestIcon width={32} height={32} color="#c5d7ec" />
        <span>АРМ ЦУП</span>
      </div>
      <div className="user">
        <Avatar style={{backgroundColor: "#3f79bf"}} icon={<UserOutlined />} />
        <div className="user__text">
          <h3>{lastName}</h3>
          <p>{firstName}</p>
        </div>
      </div>
    </div>
  );
};
