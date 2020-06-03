import React, {useCallback, useEffect, useState} from "react";
import {Typography} from "antd";
import {MoreOutlined} from "@ant-design/icons";
import {inject, observer} from "mobx-react";
// local files
const {Title} = Typography;
import {FilterIcon} from "../../../icons/filter.icon";

export const ParksHeader = inject("store")(
  observer(({store: {sidebar, parks}}) => {
    const [item, setItem] = useState();
    const callMenu = useCallback(() => {
      sidebar.toggleDrawer(true);
    }, [sidebar]);

    const callMenuFilters = useCallback(() => {
      sidebar.toggleDrawerFilters(true);
    }, [sidebar]);

    useEffect(() => {
      setItem(parks.filters.find((item) => item.sortOrder === parks.params.groupType));
    }, [parks.filters, parks.params.groupType, item]);

    return (
      <div className="parks__title">
        <Title level={3}>{(item && item.description) || "Все территории"}</Title>
        <div>
          <FilterIcon onClick={callMenuFilters} className="icon" />
          <MoreOutlined onClick={callMenu} className="icon" />
        </div>
      </div>
    );
  })
);
