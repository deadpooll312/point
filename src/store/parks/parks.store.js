import {decorate, observable} from "mobx";
import {ParksAction} from "./parks.action";

class ParksStore extends ParksAction {
  data = [];
  columns = this.getColumns();
  params = {size: 10, page: 0};
  clusterParams = {size: 10, page: 0};
  selectedItems = [];
  selectedIds = [];
  selectedPark = {};
  singlePark = {};
  activeFilter = {};
  clusters = [];
}

// eslint-disable-next-line no-class-assign
ParksStore = decorate(ParksStore, {
  data: observable,
  columns: observable,
  params: observable,
  clusterParams: observable,
  selectedItems: observable,
  selectedIds: observable,
  selectedPark: observable,
  singlePark: observable,
  activeFilter: observable,
  clusters: observable,
});

export default new ParksStore();
