import axiosInstance from "../../api/api";
import {tableColumns} from "../../consts/parks.const";
import {getStorage, setStorage} from "../../services/storage.service";
import {columns} from "../../consts/storage.conts";
import {showError, showSuccess} from "../../services/notifications.service";
import {modalParkStatuses} from "../../consts/modal.const";

export class ParksAction {
  searchPark(params) {
    return axiosInstance.get("search/park", {params}).then(({data}) => data);
  }

  getParks() {
    if (this.isLoggedIn) {
      axiosInstance
        .get("incident", {params: this.params})
        .then(({data: {elements, hasNextPage}}) => {
          this.data = elements;
          this.hasParksNextPage = hasNextPage;
        });
      axiosInstance.get("incident/forMap", {params: this.params}).then(({data}) => {
        this.mapColors = data.data;
      });
    }
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
    this.clustersIsLoading = false;
    axiosInstance
      .get("incident/clusters", {params: this.clusterParams})
      .then(({data: {elements, hasNextPage}}) => {
        this.clusters = elements;
        this.hasClustersNextPage = hasNextPage;
        this.clustersIsLoading = true;
      });
  }

  getCardById(id) {
    return axiosInstance.get(`incident/card?id=${id}`).then(({data}) => data);
  }

  updateClusterParams(params) {
    this.clusterParams = {...this.clusterParams, ...params};
  }

  onParkUpdated(value) {
    this.isParkUpdated = value;
  }

  updateParams(param) {
    const {groupType} = param;
    if (groupType) {
      setStorage("groupType", groupType);
    }
    this.params = {...this.params, ...param};
  }

  resetParkParams() {
    this.params = {page: 0, size: 10};
  }

  getFilters(params) {
    return axiosInstance.get("reference/filter", {params}).then(({data}) => data);
  }

  updateSidebarList(data) {
    this.sidebarList = data;
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
    axiosInstance
      .post(
        "/park/color/accept",
        this.selectedItems.map(({crowdColor, id}) => ({
          crowdColor,
          territoryCode: id,
        }))
      )
      .then(({data}) => {
        const isFailed = data.some(({success}) => !success);
        if (isFailed) {
          const ids = data.map(({id}) => `#${id} \n`).join(" ");
          showError(`Выполнено с ошибками: \n ${ids}`, 7);
        } else {
          showSuccess();
        }
      });
  }

  setWarningModalName(name) {
    this.warningModalName = name;
  }

  getColumns() {
    return getStorage(columns) || tableColumns;
  }
}
