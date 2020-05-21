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
}
