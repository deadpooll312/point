import axiosInstance from "~/api/api";
import {tableColumns} from "~/consts/parks.const";
import {getStorage} from "~/services/storage.service";
import {columns} from "~/consts/storage.conts";
import {showSuccess} from "~/services/notifications.service";
import {modalParkStatuses} from "~/consts/modal.const";

export class ParksAction {
  getParks() {
    axiosInstance
      .get("incident", {params: this.params})
      .then(({data: {elements, hasNextPage}}) => {
        this.data = elements;
        this.hasParksNextPage = hasNextPage;
      });
  }

  updateParkRepaint() {
    axiosInstance
      .post("park/repaint", {
        crowdColor: this.singlePark.updatedColor,
        territoryCode: this.selectedPark.id,
      })
      .then(() => {
        showSuccess(
          "Состояние территории изменено! Данные обновятся в течении 10 секунд."
        );
      })
      .catch(() => this.onParkUpdated(modalParkStatuses.canceled));
  }

  getClusters() {
    axiosInstance
      .get("incident/clusters", {params: this.clusterParams})
      .then(({data: {elements, hasNextPage}}) => {
        this.clusters = elements;
        this.hasClustersNextPage = hasNextPage;
      });
  }

  getSinglePark() {
    axiosInstance
      .get(`incident/card?id=${this.selectedPark.id}`)
      .then(({data}) => (this.singlePark = data));
  }

  updateClusterParams(params) {
    this.clusterParams = {...this.clusterParams, ...params};
  }

  onParkUpdated(value) {
    this.isParkUpdated = value;
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

  updateCrowdColorName(crowdColor) {
    this.singlePark = {...this.singlePark, updatedColor: crowdColor};
  }

  clearSinglePark() {
    this.singlePark = {};
  }

  updateColumns(value) {
    // setStorage(columns, value);
    this.columns = value;
  }

  updateSinglePark(park) {
    this.singlePark = park;
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

  getColumns() {
    return getStorage(columns) || tableColumns;
  }
}
