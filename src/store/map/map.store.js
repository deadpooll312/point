import {decorate, observable} from "mobx";
import {MapAction} from "./map.action";

class MapStore extends MapAction {
  data = undefined;
  mapColors = undefined;
  searchPolygonId = undefined;
  recordPinId = undefined;
}

// eslint-disable-next-line no-class-assign
MapStore = decorate(MapStore, {
  data: observable,
  searchPolygonId: observable,
  recordPinId: observable,
});

export default new MapStore();
