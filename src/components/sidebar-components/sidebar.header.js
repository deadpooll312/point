import React from "react";
import {Avatar} from "antd";
import {Map} from "../../icons/map";
import {UserAddOutlined} from "@ant-design/icons";

export const SidebarHeader = ({auth: {firstName, id, lastName}}) => {
  return (
    <div className="sider-header">
      <Map /> <span>АРМ ЦУП</span>
      <Avatar style={{backgroundColor: "#87d068"}} icon={<UserAddOutlined />} />
      <p>{firstName}</p>
      <p>{id}</p>
      <p>{lastName}</p>
    </div>
  );
};
