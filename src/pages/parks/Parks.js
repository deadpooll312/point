import React from "react";
import {ParksHeader} from "./components/parks.header";
import {ParksActions} from "./components/parks.actions";
import {ParksTable} from "./components/parks.table";
import {ParksDrawer} from "./components/parks.drawer";

export const Parks = () => {
  return (
    <div className="parks">
      <ParksHeader />
      <ParksActions />
      <ParksTable />
      <ParksDrawer />
    </div>
  );
};
