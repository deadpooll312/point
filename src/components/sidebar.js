import React, {useCallback, useEffect} from "react";
import {Layout, Space} from "antd";
import {inject, observer} from "mobx-react";
import {Map} from "../icons/map";
import {ForestIcon} from "../icons/forest.icon";
import {Forest2Icon} from "../icons/forest2.icon";
import {OoptIcon} from "../icons/oopt.icon";
import {ShoreIcon} from "../icons/shore.icon";
import {TerritoryIcon} from "../icons/territory.icon";
import {SettingsIcon} from "../icons/settings.icon";
import {InfoIcon} from "../icons/info.icon";
import {SignOutIcon} from "../icons/signout.icon";
import {ShowMenuIcon} from "../icons/show-menu.icon";
import {sidebarOptions} from "../consts/sidebar.const";
const {Sider} = Layout;

export const Sidebar = inject("store")(
  observer(({store: {sidebar, auth}}) => {
    useEffect(() => {
      const user = localStorage.userInfo;
      if (user) {
        auth.updateUser(JSON.parse(user));
      }
    }, []);

    const click = useCallback((value) => {
      console.log("value", value);
    }, []);

    return (
      <Sider className={sidebar.showBar ? "small" : ""}>
        <div className="sider-header"></div>
        <div className="options">
          <Space onClick={() => click(sidebarOptions.ALL_TERRITORY)}>
            <Map color="" />
            {sidebarOptions.ALL_TERRITORY}
          </Space>
          <Space>
            <ForestIcon />
            {sidebarOptions.PARK_VIEW}
          </Space>
          <Space>
            <Forest2Icon />
            {sidebarOptions.PARKS}
          </Space>
          <Space>
            <OoptIcon />
            {sidebarOptions.OOPT}
          </Space>
          <Space>
            <ShoreIcon />
            {sidebarOptions.SHORE}
          </Space>
          <Space>
            <TerritoryIcon />
            {sidebarOptions.TERRITORY}
          </Space>
          <Space>
            <SettingsIcon />
            {sidebarOptions.SETTINGS}
          </Space>
          <Space>
            <InfoIcon />
            {sidebarOptions.INFO}
          </Space>
          <Space>
            <SignOutIcon />
            {sidebarOptions.EXIT}
          </Space>
          <Space>
            <ShowMenuIcon />
            {sidebarOptions.MENU}
          </Space>
        </div>
      </Sider>
    );
  })
);
