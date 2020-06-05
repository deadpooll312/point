import {Tile as TileLayer} from "ol/layer";
import {OSM} from "ol/source";
import Map from "ol/Map";
import View from "ol/View";
import Zoom from "ol/control/Zoom";
// local files
import {center, minZoom, parkMap, zoom} from "../consts/map.const";

export const layers = [
  new TileLayer({
    source: new OSM(),
  }),
];

export const createMap = () =>
  new Map({
    layers: layers,
    target: parkMap,
    logo: false,
    view: new View({center, minZoom, zoom}),
    controls: [new Zoom()],
  });
