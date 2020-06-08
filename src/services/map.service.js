import {Tile as TileLayer} from "ol/layer";
import Map from "ol/Map";
import View from "ol/View";
import Zoom from "ol/control/Zoom";
import XYZSource from "ol/source/XYZ";
// local files
import {center, minZoom, parkMap, urlTemplate, zoom} from "../consts/map.const";
export const tileId = "tiles";

function getWGSTiles(urlTemplate) {
  return createTiles2GIS(urlTemplate);
}

function switchMapSRS(map, urlTemplate) {
  setTileLayer(map, getWGSTiles(urlTemplate));
  map.updateSize();
}

export function getLayerById(map, id) {
  return map
    .getLayers()
    .getArray()
    .find((l) => l.get("id") === id);
}

export function createTiles2GIS(urlTemplate) {
  return new TileLayer({
    id: tileId,
    source: new XYZSource({
      url: `${location.protocol}//${urlTemplate}`,
      crossOrigin: "anonymous",
    }),
    opacity: 0.7,
  });
}

export function setTileLayer(map, layer) {
  const tiles = getLayerById(map, tileId);
  map.removeLayer(tiles);
  map.getLayers().insertAt(0, layer);
  return map;
}

export const createMap = () => {
  const mapNew = new Map({
    logo: false,
    controls: [new Zoom()],
    target: parkMap,
    view: new View({center, minZoom, zoom}),
  });

  switchMapSRS(mapNew, urlTemplate);

  return mapNew.updateSize();
};
