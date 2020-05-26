import React, {useCallback, useEffect, useState} from "react";
import {inject, observer} from "mobx-react";
import {Layout, Space, Divider} from "antd";
import {Map} from "../icons/map";
import {ForestIcon} from "../icons/forest.icon";
import {Forest2Icon} from "../icons/forest2.icon";
import {OoptIcon} from "../icons/oopt.icon";
import {ShoreIcon} from "../icons/shore.icon";
import {TerritoryIcon} from "../icons/territory.icon";
import {InfoIcon} from "../icons/info.icon";
import {sidebarOptions} from "../consts/sidebar.const";
import {parkFilterTypes} from "../consts/park.filter.const";
import {SidebarMenu} from "./sidebar-components/sidebar.menu";
import {green} from "../consts/colors.const";
import {SidebarHeader} from "./sidebar-components/sidebar.header";
import {SidebarSettings} from "./sidebar-components/sidebar.settings";
import {SidebarExit} from "./sidebar-components/sidebar.exit";
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

    const click = useCallback(
      (groupType) => {
        parks.updateActiveFilter(data.find((i) => i.sortOrder === groupType));
        parks.getParks();
      },
      [data]
    );

    const isActive = useCallback(
      (sortOrder) => {
        return parks.params.groupType === sortOrder ? green : null;
      },
      [parks.params.groupType]
    );

    const getIcon = (id) => {
      switch (id) {
        case 1:
          return <Map color={isActive(id)} />;
        case 2:
          return <ForestIcon color={isActive(id)} />;
        case 3:
          return <Forest2Icon color={isActive(id)} />;
        case 4:
          return <OoptIcon color={isActive(id)} />;
        case 5:
          return <ShoreIcon color={isActive(id)} />;
        case 6:
          return <TerritoryIcon color={isActive(id)} />;
      }
    };

    return (
      <Sider className={sidebar.showBar ? "small" : ""}>
        <SidebarHeader auth={auth} parks={parks} />
        <div className="options">
          {data &&
            data.map(({sortOrder, description}) => (
              <Space key={sortOrder} onClick={() => click(sortOrder)}>
                {getIcon(sortOrder)}
                <span style={{color: isActive(sortOrder)}}>{description}</span>
              </Space>
            ))}
          <Divider />
          <SidebarSettings />
          <Space>
            <InfoIcon />
            <span>{sidebarOptions.INFO}</span>
          </Space>
          <SidebarExit auth={auth} />
          <SidebarMenu sidebar={sidebar} />
        </div>
      </Sider>
    );
  })
);
