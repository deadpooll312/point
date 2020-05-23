import React, {useCallback, useEffect, useState} from "react";
import {Layout, Space, Divider} from "antd";
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
import {parkFilterTypes} from "../consts/park.filter.const";
const {Sider} = Layout;

export const Sidebar = inject("store")(
  observer(({store: {sidebar, auth, parks}}) => {
    const [data, setData] = useState();
    useEffect(() => {
      const user = localStorage.userInfo;
      if (user) {
        auth.updateUser(JSON.parse(user));
        parks.getFilters(parkFilterTypes.groupType).then((res) => setData(res));
      }
    }, []);

    const click = useCallback((groupType) => {
      console.log("groupType", groupType);
      parks.updateParams({groupType});
      parks.getParks();
    }, []);

    const getIcon = (id) => {
      switch (id) {
        case 1:
          return <Map />;
        case 2:
          return <ForestIcon />;
        case 3:
          return <Forest2Icon />;
        case 4:
          return <OoptIcon />;
        case 5:
          return <ShoreIcon />;
        case 6:
          return <ShoreIcon />;
        case 7:
          return <TerritoryIcon />;
      }
    };

    return (
      <Sider className={sidebar.showBar ? "small" : ""}>
        <div className="sider-header"></div>
        <div className="options">
          {data &&
            data.map(({sortOrder, description}) => (
              <Space key={sortOrder} onClick={() => click(sortOrder)}>
                {getIcon(sortOrder)}
                <span>{description}</span>
              </Space>
            ))}
          <Divider />
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
