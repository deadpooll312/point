import {decorate, observable} from "mobx";
import {ParksAction} from "./parks.action";

class ParksStore extends ParksAction {
  data = [];
  columns = [];
}

// eslint-disable-next-line no-class-assign
ParksStore = decorate(ParksStore, {
  data: observable,
});

export default new ParksStore();
