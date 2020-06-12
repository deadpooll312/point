import {decorate, observable} from "mobx";
import {MapAction} from "./map.action";

class MapStore extends MapAction {
  data = null;
  mapColors = null;
}

// eslint-disable-next-line no-class-assign
MapStore = decorate(MapStore, {
  data: observable,
  mapColors: observable,
});

export default new MapStore();
