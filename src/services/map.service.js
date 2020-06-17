import {Tile as TileLayer} from "ol/layer";
import Map from "ol/Map";
import View from "ol/View";
import Zoom from "ol/control/Zoom";
import XYZSource from "ol/source/XYZ";
import Feature from "ol/Feature";
import Point from "ol/geom/Point";
import GeoJSON from "ol/format/GeoJSON";
import VectorSource from "ol/source/Vector";
import VectorLayer from "ol/layer/Vector";
import {Icon, Style} from "ol/style";
import {fromLonLat} from "ol/proj";
// local files
import {
  center,
  destination,
  mapStyles,
  minZoom,
  parkMap,
  source,
  urlTemplate,
  zoom,
} from "../consts/map.const";
import Pointer from "../static/Pointer.svg";

export const tileId = "tiles";

// Стили для PIN иконки
function createStyle(src) {
  return new Style({
    image: new Icon({
      anchor: [0.5, 46],
      src: src,
      anchorXUnits: "fraction",
      anchorYUnits: "pixels",
    }),
  });
}

// создаем подложку 2gis
function getWGSTiles(urlTemplate) {
  return createTiles2GIS(urlTemplate);
}

// создаем обновить данные с подложкой 2gis
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

// Создание слоя 2gis
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

export function cleanDuplicatedMap({newMap, layerName}) {
  if (newMap) {
    newMap
      .getLayers()
      .getArray()
      .filter((layer) => layer.get("name") === "Polygon")
      .forEach((layer) => newMap.removeLayer(layer));
  }
}

// установка полигона для парков
export const setPolygon = ({mapNew, data}) => {
  const features = new GeoJSON().readFeatures(data, {
    dataProjection: source,
    featureProjection: destination,
  });

  const vectorSource = new VectorSource({features});

  const vectorLayer = new VectorLayer({
    source: vectorSource,
    // установка цвета от обьекта STYLES
    style: (feature) => mapStyles[feature.get("color")],
  });
  vectorLayer.set("name", "Polygon");

  mapNew.addLayer(vectorLayer);
};

// Установка иконки ПОЛИГОНА
export const setPolygonIcon = ({map, destination, id}) => {
  // PIN icon
  const iconFeature = new Feature({
    geometry: new Point(fromLonLat(destination)),
    id,
  });
  iconFeature.set("style", createStyle(Pointer));
  const pinVector = new VectorLayer({
    style: (feature) => feature.get("style"),
    source: new VectorSource({features: [iconFeature]}),
  });

  pinVector.setZIndex(1001);
  map.addLayer(pinVector);
};

// Выдача карты слоем 2gis
export const createMap = () => {
  const mapNew = new Map({
    logo: false,
    // убираем контроллеры кроме zoom
    controls: [new Zoom()],
    target: parkMap,
    // высота и центр карты
    view: new View({center, minZoom, zoom}),
  });

  switchMapSRS(mapNew, urlTemplate);

  mapNew.updateSize();

  return mapNew;
};

// Преобразование данных из сервера для КАРТЫ
export const updateMapDTO = (data, mapColors) => {
  return data.map((item) => {
    if (mapColors) {
      const mapItem = mapColors.find((colorItem) => colorItem.id === parseInt(item.id));
      const {crowdColor} = mapItem || {};
      return Object.assign(item, {properties: {color: crowdColor || "grey"}});
    } else {
      return item;
    }
  });
};

export const setClickEvent = ({map, cb}) => {
  map.on("click", (evt) => {
    const feature = map.forEachFeatureAtPixel(evt.pixel, (feature) => feature);
    if (feature) {
      cb(feature);
    }
  });
};
