import React from "react";
import {Tabs} from "antd";
import {ParkCluster} from "./park.cluster";
import {ParkInfo} from "./park.info";
const {TabPane} = Tabs;

export const ParkModalTab = () => {
  const activeTab = "1";

  return (
    <Tabs defaultActiveKey={activeTab}>
      <TabPane tab="Сведения" key="1">
        <ParkInfo />
      </TabPane>
      <TabPane tab="Скопление" key="2">
        <ParkCluster />
      </TabPane>
    </Tabs>
  );
};
