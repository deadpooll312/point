import React, {memo, useCallback, useState} from "react";
import {ShowMenuIcon} from "../../icons/show-menu.icon";
import {sidebarOptions} from "../../consts/sidebar.const";
import {Space} from "antd";
import {green} from "../../consts/colors.const";

// eslint-disable-next-line
export const SidebarMenu = memo(({sidebar}) => {
  const [color, setColor] = useState();
  const showMenu = useCallback(() => {
    sidebar.toggleModal(!sidebar.showBar);
    setColor(sidebar.showBar ? green : null);
  }, [sidebar.showBar]);

  return (
    <Space onClick={showMenu}>
      <ShowMenuIcon color={color} />
      {sidebarOptions.MENU}
    </Space>
  );
});
