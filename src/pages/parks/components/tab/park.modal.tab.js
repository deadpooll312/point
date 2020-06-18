import React, {useEffect} from "react";
import {Tabs} from "antd";
import {inject, observer} from "mobx-react";
const {TabPane} = Tabs;
// local files
import {ParkCluster} from "./park.cluster";
import {ParkInfo} from "./park.info";

export const ParkModalTab = inject("store")(
  observer(({activeTab, store: {parks}}) => {
    useEffect(() => {
      if (parks.selectedPark && parks.selectedPark.id) {
        parks.clearSinglePark();
        parks.getCardById(parks.selectedPark.id).then((park) => {
          parks.updateSinglePark(park);
        });
      }
    }, [parks.selectedPark]);

    return (
      <Tabs
        animated={false}
        defaultActiveKey={activeTab || "1"}
        className="park-modal-tabs"
      >
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
