import React, {useCallback, useEffect, useState} from "react";
import {Typography} from "antd";
import {MoreOutlined} from "@ant-design/icons";
import {inject, observer} from "mobx-react";
// local files
const {Title} = Typography;
import {FilterIcon} from "../../../icons/filter.icon";
import {ReportIcon} from "../../../icons/report.icon";

export const ParksHeader = inject("store")(
  observer(({store: {sidebar, parks}}) => {
    const [item, setItem] = useState();
    const callMenu = useCallback(() => {
      sidebar.toggleDrawer(true);
    }, [sidebar]);

    const callMenuFilters = useCallback(() => {
      sidebar.toggleDrawerFilters(true);
    }, [sidebar]);

    const callModalReport = useCallback(() => {
      sidebar.toggleModalReport(true);
    }, [sidebar]);

    useEffect(() => {
      if (parks.sidebarList.length) {
        setItem(
          parks.sidebarList.find((item) => item.sortOrder === parks.params.groupType)
        );
      }
    }, [parks.sidebarList, parks.params.groupType, item]);

    return (
      <div className="parks__title">
        <Title level={3}>{(item && item.description) || "Все территории"}</Title>
        <div className="icons-wrapper">
          <ReportIcon onClick={callModalReport} className="icon icon-report" />
          <FilterIcon onClick={callMenuFilters} className="icon" />
          <MoreOutlined onClick={callMenu} className="icon" />
        </div>
      </div>
    );
  })
);
