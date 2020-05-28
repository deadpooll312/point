import React from "react";
import {ParksHeader} from "./components/parks.header";
import {ParksActions} from "./components/parks.actions";
import {ParksTable} from "./components/parks.table";
import {ParksDrawer} from "./components/parks.drawer";
import {ParkModals} from "./components/park.modals";

export const Parks = () => {
  return (
    <div className="parks">
      <ParkModals />
      <ParksHeader />
      <ParksActions />
      <ParksTable />
      <ParksDrawer />
    </div>
  );
};
