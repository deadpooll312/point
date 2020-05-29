import React, {memo, Fragment, useState} from "react";
import {sidebarOptions} from "../../consts/sidebar.const";
import {Space} from "antd";
import {SettingsIcon} from "../../icons/settings.icon";
import {ModalComponent} from "../modal.component";
import {SidebarTheme} from "./sidebar.theme";

// eslint-disable-next-line
export const SidebarSettings = memo(() => {
  const [visible, setVisible] = useState(false);
  return (
    <Fragment>
      <ModalComponent
        handleCancel={() => setVisible(false)}
        handleOk={() => setVisible(false)}
        danger
        okText={"Сохранить"}
        cancelText="Отмена"
        title={"Настройки"}
        visible={visible}
      >
        <React.Fragment>
          <h3 className="sidebar-theme-header">Внешний вид</h3>
          <SidebarTheme />
        </React.Fragment>
      </ModalComponent>
      <Space onClick={() => setVisible(true)}>
        <SettingsIcon />
        <span>{sidebarOptions.SETTINGS}</span>
      </Space>
    </Fragment>
  );
});
