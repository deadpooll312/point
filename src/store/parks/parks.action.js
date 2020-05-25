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
}
