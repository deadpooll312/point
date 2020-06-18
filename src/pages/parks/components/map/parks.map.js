import React, {useEffect, useState} from "react";
import "ol/ol.css";
import {
  cleanDuplicatedMap,
  createMap,
  setClickEvent,
  setPolygon,
  setPolygonIcon,
  updateMapDTO,
} from "../../../../services/map.service";
import {parkMap} from "../../../../consts/map.const";
import {inject, observer} from "mobx-react";
import {warningModalNames} from "../../../../consts/modal.const";

export const ParksMap = inject("store")(
  observer(({store: {map, parks}}) => {
    const [newMap, setMap] = useState();

    useEffect(() => {
      const newMap = createMap();
      setMap(newMap);
      map.getGeometry();
      map.getMapColors();
      setClickEvent({
        map: newMap,
        cb: (feature) => {
          const id = feature.getId();
          if (id) {
            map.updateSearchPolygonId(id);
            parks.updateClusterParams({id});
            parks.setSelectedPark({id});
            parks.getClusters();
          } else {
            map.updatePolygonRecordId(feature.get("id"));
            parks.setWarningModalName(warningModalNames.openCluster);
          }
        },
      });
    }, []);

    useEffect(() => {
      if (newMap) {
        parks.clusters.forEach(({recordId, longitude, latitude}) => {
          const destination = [+longitude, +latitude];
          // const destination = [37.81306589, 55.72459861];
          setPolygonIcon({map: newMap, destination, id: recordId});
        });
      }
    }, [parks.clusters]);

    useEffect(() => {
      cleanDuplicatedMap({newMap, layerName: "Polygon"});
      cleanDuplicatedMap({newMap, layerName: "VectorLayer"});
      if (map.data) {
        const features = updateMapDTO(map.data.features, parks.mapColors);
        setPolygon({data: {features, type: "FeatureCollection"}, mapNew: newMap});
      }
    }, [map.data, parks.mapColors, newMap]);

    return <div id={parkMap} className="parks-map"></div>;
  })
);
