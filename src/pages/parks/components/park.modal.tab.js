import {ParkInfo} from "./park.info";
import {ParkCluster} from "../../../styles/components/park.cluster";
import {Tabs} from "antd";
import React from "react";
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
