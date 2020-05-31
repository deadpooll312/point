import React, {useCallback} from "react";
import {Drawer} from "antd";
import {inject, observer} from "mobx-react";
// local files
import {ParkDrawButtonsFiltres} from "./park.draw.buttons.filters";
import {ParksFilters} from "./parks.filters";

export const ParksDrawerFilters = inject("store")(
  observer(({store: {sidebar, parks}}) => {
    const onClose = useCallback(() => {
      sidebar.toggleDrawerFilters(false);
    }, [sidebar]);

    const submit = useCallback(() => {
      parks.getParks();
    }, []);

    const refresh = useCallback(() => {
      parks.updateParams({regionCode: undefined, groupType: undefined});
    }, []);

    return (
      <Drawer
        className="draw-filter draw"
        width={300}
        title="Фильтры"
        placement="right"
        closable={false}
        onClose={onClose}
        visible={sidebar.showDrawerFilters}
      >
        <ParksFilters />
        <ParkDrawButtonsFiltres params={parks.params} submit={submit} refresh={refresh} />
      </Drawer>
    );
  })
);
