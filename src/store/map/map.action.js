import axiosInstance from "../../api/api";

export class MapAction {
  getGeometry() {
    return axiosInstance.get("layer/geometry").then(({data}) => data);
  }
}
