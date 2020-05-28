import axiosInstance from "~/api/api";
import {tableColumns} from "~/consts/parks.const";
import {getStorage, setStorage} from "~/services/storage.service";
import {columns} from "~/consts/storage.conts";
import {showSuccess} from "~/services/notifications.service";

export class ParksAction {
  getParks() {
    axiosInstance
      .get("incident", {params: this.params})
      .then(({data: {elements}}) => (this.data = elements));
  }

  getClusters() {
    axiosInstance
      .get("incident/clusters", {params: this.clusterParams})
      .then(({data}) => (this.clusters = data));
  }

  updateClusterParams(params) {
    this.clusterParams = {...this.clusterParams, ...params};
  }

  updateParams(param) {
    this.params = {...this.params, ...param};
  }

  updateActiveFilter(item) {
    this.activeFilter = item;
    this.updateParams({groupType: item.sortOrder, page: 0});
  }

  getFilters(group) {
    return axiosInstance
      .get("reference/filter", {params: {group}})
      .then(({data}) => data);
  }

  selectItems(items) {
    this.selectedItems = items;
  }

  selectItemIds(ids) {
    this.selectedIds = ids;
  }

  setSelectedPark(park) {
    this.selectedPark = park;
  }

  getSinglePark() {
    axiosInstance
      .get(`incident/card?id=${this.selectedPark.id}`)
      .then(({data}) => (this.singlePark = data));
  }

  updateCrowdColorName(crowdColor) {
    this.singlePark = {...this.singlePark, updatedColor: crowdColor};
  }

  updateColumns(value) {
    setStorage(columns, value);
    this.columns = value;
  }

  colorAccept() {
    const {crowdColor} = this.singlePark;
    axiosInstance
      .post("/park/color/accept", {
        crowdColor,
        territoryCode: this.selectedPark.id,
      })
      .then(() => showSuccess());
  }

  setWarningModalName(name) {
    this.warningModalName = name;
  }

  updateParkRepaint() {
    axiosInstance
      .post("park/repaint", {
        crowdColor: this.singlePark.updatedColor,
        territoryCode: this.selectedPark.id,
      })
      .then(() => {
        showSuccess("Состояние территории изменено!");
      });
  }

  getColumns() {
    return getStorage(columns) || tableColumns;
  }
}
