import React, {memo, useCallback} from "react";
import {Space, Popconfirm} from "antd";
import {sidebarOptions} from "../../consts/sidebar.const";
import {SignOutIcon} from "../../icons/signout.icon";
import {exitText} from "../../consts/text.const";
// eslint-disable-next-line
export const SidebarExit = memo(({auth}) => {
  const confirm = useCallback(() => {
    auth.logout();
  }, [auth]);

  return (
    <Popconfirm
      placement="top"
      title={exitText}
      onConfirm={confirm}
      okText="Да"
      cancelText="Нет"
    >
      <Space>
        <SignOutIcon />
        <span>{sidebarOptions.EXIT}</span>
      </Space>
    </Popconfirm>
  );
});
