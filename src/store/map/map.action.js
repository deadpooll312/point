import axiosInstance from "../../api/api";

export class MapAction {
  getGeometry() {
    return axiosInstance.get("layer/geometry").then(({data}) => {
      this.data = data;
    });
  }

  getMapColors() {
    axiosInstance.get("incident/forMap").then(({data}) => {
      this.mapColors = data.data;
    });
  }

  updateSearchPolygonId(id) {
    this.searchPolygonId = id;
  }

  updatePolygonRecordId(id) {
    this.polygonRecordId = id;
  }
}
