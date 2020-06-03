import {Tooltip} from "antd";
import React from "react";
import {ReloadOutlined} from "@ant-design/icons";

// eslint-disable-next-line react/display-name
export const SearchTooltip = ({refresh, id}) => {
  if (id) {
    return (
      <Tooltip color={"var(--blue)"} placement="top" title="Сбросить поиск">
        <ReloadOutlined onClick={refresh} className="reload" />
      </Tooltip>
    );
  } else {
    return null;
  }
};
