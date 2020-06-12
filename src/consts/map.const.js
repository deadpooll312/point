import {transform} from "ol/proj";
import {Fill, Stroke, Style} from "ol/style";

const long = 37.624876;
const lat = 55.756288;
export const source = "EPSG:4326";
export const destination = "EPSG:3857";

export const urlTemplate = `tile1.maps.2gis.com/tiles?layerType=nc&x={x}&y={y}&z={z}`;
export const parkMap = "park-map";
export const minZoom = 9;
export const zoom = 10;
export const center = transform([long, lat], source, destination);

// map colors
export const green = "#7ab641";
export const greenOpacity = "rgba(119, 184, 65, 0.75)";
export const red = "#d86f56";
export const redOpacity = "rgba(215, 110, 86, 0.75)";
export const yellow = "#e3ae5e";
export const yellowOpacity = "rgba(228, 175, 94, 0.75)";
export const grey = "#eee";
export const greyOpacity = "rgba(229, 229, 229, 0.71)";
// map styles
// выставляем стили для каждого цвета
export const mapStyles = {
  grey: new Style({
    stroke: new Stroke({
      color: grey,
      width: 2,
    }),
    fill: new Fill({
      color: greyOpacity,
    }),
  }),
  green: new Style({
    stroke: new Stroke({
      color: green,
      width: 2,
    }),
    fill: new Fill({
      color: greenOpacity,
    }),
  }),
  red: new Style({
    stroke: new Stroke({
      color: red,
      width: 2,
    }),
    fill: new Fill({
      color: redOpacity,
    }),
  }),
  yellow: new Style({
    stroke: new Stroke({
      color: yellow,
      width: 2,
    }),
    fill: new Fill({
      color: yellowOpacity,
    }),
  }),
};
