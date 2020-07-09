import React from "react";
import {ParksHeader} from "./components/parks.header";
import {ParksActions} from "./components/parks.actions";
import {ParksTable} from "./components/table/parks.table";
import {ParksDrawer} from "./components/draw/parks.drawer";
import {ParkModals} from "./components/modals/park.modals";
import {ParksDrawerFilters} from "./components/draw/parks.drawer.filters";
import {ParksMap} from "./components/map/parks.map";
import {ModalImageViewer} from "../../components/image-viewer";
import {ReportModal} from "./components/modals/report.modals";

export const Parks = () => {
  return (
    <div className="parks">
      <ParkModals />
      <ParksMap />
      <ParksHeader />
      <ParksActions />
      <ParksTable />
      <ParksDrawer />
      <ParksDrawerFilters />
      <ModalImageViewer />
      <ReportModal />
    </div>
  );
};
