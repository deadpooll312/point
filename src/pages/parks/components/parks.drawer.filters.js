import React, {useCallback} from "react";
import {Drawer} from "antd";
import {inject, observer} from "mobx-react";
import {ParkDrawButtonsFiltres} from "./park.draw.buttons.filters";
import {ParksFilters} from "./parks.filters";
// local files

export const ParksDrawerFilters = inject("store")(
  observer(({store: {sidebar}}) => {
    const onClose = useCallback(() => {
      sidebar.toggleDrawerFilters(false);
    }, [sidebar]);

    return (
      <Drawer
        className="draw"
        width={300}
        title="Фильтры"
        placement="right"
        closable={false}
        onClose={onClose}
        visible={sidebar.showDrawerFilters}
      >
        <ParksFilters />
        <ParkDrawButtonsFiltres />
      </Drawer>
    );
  })
);
