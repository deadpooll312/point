import React, {useEffect} from "react";
import {Tabs} from "antd";
import {ParkCluster} from "./park.cluster";
import {ParkInfo} from "./park.info";
import {inject, observer} from "mobx-react";
const {TabPane} = Tabs;

export const ParkModalTab = inject("store")(
  observer(({store: {parks}}) => {
    const activeTab = "1";

    useEffect(() => {
      parks.getSinglePark();
    }, []);

    return (
      <Tabs defaultActiveKey={activeTab}>
        <TabPane tab="Сведения" key="1">
          <ParkInfo park={parks.singlePark} />
        </TabPane>
        <TabPane tab="Скопление" key="2">
          <ParkCluster park={parks.singlePark} />
        </TabPane>
      </Tabs>
    );
  })
);
