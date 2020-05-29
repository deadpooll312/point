import React, {useCallback} from "react";
import {Typography} from "antd";
import {MoreOutlined, FilterOutlined} from "@ant-design/icons";
import {inject, observer} from "mobx-react";
const {Title} = Typography;

export const ParksHeader = inject("store")(
  observer(({store: {sidebar, parks}}) => {
    const callMenu = useCallback(() => {
      sidebar.toggleDrawer(true);
    }, [sidebar]);

    const callMenuFilters = useCallback(() => {
      sidebar.toggleDrawerFilters(true);
    }, [sidebar]);

    return (
      <div className="parks__title">
        <Title level={3}>{parks.activeFilter.description || "Все территории"}</Title>
        <div>
          <FilterOutlined onClick={callMenuFilters} className="icon" />
          <MoreOutlined onClick={callMenu} className="icon" />
        </div>
      </div>
    );
  })
);
