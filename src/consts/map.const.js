import {transform} from "ol/proj";

const long = 37.624876;
const lat = 55.756288;
export const source = "EPSG:4326";
export const destination = "EPSG:3857";

export const urlTemplate = `tile1.maps.2gis.com/tiles?layerType=nc&x={x}&y={y}&z={z}`;
export const parkMap = "park-map";
export const minZoom = 9;
export const zoom = 10;
export const center = transform([long, lat], source, destination);
