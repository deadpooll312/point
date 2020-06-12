import {Tile as TileLayer} from "ol/layer";
import Map from "ol/Map";
import View from "ol/View";
import Zoom from "ol/control/Zoom";
import XYZSource from "ol/source/XYZ";

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
import GeoJSON from "ol/format/GeoJSON";
import VectorSource from "ol/source/Vector";
import VectorLayer from "ol/layer/Vector";
export const tileId = "tiles";

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

  mapNew.addLayer(vectorLayer);
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
