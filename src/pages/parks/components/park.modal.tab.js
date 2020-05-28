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
    }, [parks]);

    return (
      <Tabs animated={false} defaultActiveKey={activeTab} className="park-modal-tabs">
        <TabPane tab="Сведения" key="1">
          <ParkInfo />
        </TabPane>
        <TabPane tab="Скопление" key="2">
          <ParkCluster />
        </TabPane>
      </Tabs>
    );
  })
);
