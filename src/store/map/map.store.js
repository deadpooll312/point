import {decorate, observable} from "mobx";
import {MapAction} from "./map.action";

class MapStore extends MapAction {
  data = [];
}

// eslint-disable-next-line no-class-assign
MapStore = decorate(MapStore, {
  data: observable,
});

export default new MapStore();
