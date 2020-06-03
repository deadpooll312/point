import {computed, decorate, observable, reaction} from "mobx";
import {ParksAction} from "./parks.action";
import AuthStore from "../auth/auth.store";

class ParksStore extends ParksAction {
  data = [];
  params = {size: 10, page: 0};
  clusterParams = {size: 10, page: 0};
  selectedItems = [];
  selectedIds = [];
  selectedPark = {};
  singlePark = {};
  clusters = [];
  warningModalName = null;
  hasParksNextPage = false;
  hasClustersNextPage = false;
  isLoggedIn = false;
  isParkUpdated = null;
  columns = this.getColumns();
  filters = [];
  sidebarList = [];

  get parkTableColumns() {
    return this.columns.filter((i) => i.isActive);
  }

  constructor() {
    super();

    reaction(
      () => AuthStore.id,
      (id) => (this.isLoggedIn = !!id)
    );
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
  clusters: observable,
  warningModalName: observable,
  hasParksNextPage: observable,
  hasClustersNextPage: observable,
  isParkUpdated: observable,
  isLoggedIn: observable,
  filters: observable,
  sidebarList: observable,
});

export default new ParksStore();
