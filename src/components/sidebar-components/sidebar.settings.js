import React, {memo, Fragment, useState} from "react";
import {sidebarOptions} from "../../consts/sidebar.const";
import {Space, Tabs, Switch} from "antd";
import {SettingsIcon} from "../../icons/settings.icon";
import {ModalComponent} from "../modal.component";
import {SidebarTheme} from "./sidebar.theme";
const {TabPane} = Tabs;
// eslint-disable-next-line
export const SidebarSettings = memo(() => {
  const [visible, setVisible] = useState(false);
  return (
    <Fragment>
      <ModalComponent
        handleCancel={() => setVisible(false)}
        handleOk={() => {
          console.log("setVisible(false)");
          setVisible(false);
        }}
        danger
        okText={"Сохранить"}
        cancelText="Отмена"
        title={"Настройки"}
        visible={visible}
      >
        <Tabs defaultActiveKey="1">
          <TabPane tab="Общие" key="1">
            Общие
          </TabPane>
          <TabPane tab="Внешний вид" key="2">
            <SidebarTheme />
          </TabPane>
          <TabPane tab="Дополнит-ый раздел" key="3">
            Дополнит-ый раздел
          </TabPane>
        </Tabs>
      </ModalComponent>
      <Space onClick={() => setVisible(true)}>
        <SettingsIcon />
        <span>{sidebarOptions.SETTINGS}</span>
      </Space>
    </Fragment>
  );
});
