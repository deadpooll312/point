import {decorate, observable} from "mobx";
import {ParksAction} from "./parks.action";
import {tableColumns} from "~/consts/parks.const";

class ParksStore extends ParksAction {
  data = [];
  columns = tableColumns;
  params = {size: 10, page: 0};
  selectedItems = [];
  selectedIds = [];
  selectedPark = {};
  singlePark = {};
  activeFilter = {};
}

// eslint-disable-next-line no-class-assign
ParksStore = decorate(ParksStore, {
  data: observable,
  columns: observable,
  params: observable,
  selectedItems: observable,
  selectedIds: observable,
  selectedPark: observable,
  singlePark: observable,
  activeFilter: observable,
});

export default new ParksStore();
