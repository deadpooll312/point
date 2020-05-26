import axiosInstance from "../../api/api";

export class ParksAction {
  getParks() {
    axiosInstance
      .get("incident", {params: this.params})
      .then(({data}) => (this.data = data));
  }

  updateParams(param) {
    this.params = {...this.params, ...param};
  }

  updateActiveFilter(item) {
    this.activeFilter = item;
    this.updateParams({groupType: item.sortOrder});
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

  updateColumns(columns) {
    this.columns = columns;
  }
}
