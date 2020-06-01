import {computed, decorate, observable} from "mobx";
import {ParksAction} from "./parks.action";

class ParksStore extends ParksAction {
  data = [];
  params = {size: 10, page: 0};
  clusterParams = {size: 10, page: 0};
  selectedItems = [];
  selectedIds = [];
  selectedPark = {};
  singlePark = {};
  activeFilter = {};
  clusters = [];
  warningModalName = null;
  hasParksNextPage = false;
  hasClustersNextPage = false;
  isParkUpdated = null;
  columns = this.getColumns();
  get parkTableColumns() {
    return this.columns.filter((i) => i.isActive);
  }
}

// eslint-disable-next-line no-class-assign
ParksStore = decorate(ParksStore, {
  data: observable,
  columns: observable,
  parkTableColumns: computed,
  params: observable,
  clusterParams: observable,
  selectedItems: observable,
  selectedIds: observable,
  selectedPark: observable,
  singlePark: observable,
  activeFilter: observable,
  clusters: observable,
  warningModalName: observable,
  hasParksNextPage: observable,
  hasClustersNextPage: observable,
  isParkUpdated: observable,
});

export default new ParksStore();
