import axiosInstance from "../../api/api";

export class ParksAction {
  getParks() {
    axiosInstance.get("reference/parks", {}).then((res) => {
      console.log(res);
    });
  }

  updateParams(param) {
    this.params = {...this.params, ...param};
  }
}
