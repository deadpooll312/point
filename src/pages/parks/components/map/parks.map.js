import React, {useEffect, useState} from "react";
import {Spin} from "antd";
import {inject, observer} from "mobx-react";
import "ol/ol.css";
// local files
import {
  cleanDuplicatedMap,
  createMap,
  setClickEvent,
  setPolygon,
  setPolygonIcon,
  updateMapDTO,
} from "../../../../services/map.service";
import {parkMap} from "../../../../consts/map.const";
import {warningModalNames} from "../../../../consts/modal.const";

export const ParksMap = inject("store")(
  observer(({store: {map, parks}}) => {
    const [loader, setLoader] = useState(true);
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
          setLoader(true);
          cleanDuplicatedMap({newMap, layerName: "VectorLayer"});
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
          const destination = [+latitude, +longitude];
          setPolygonIcon({map: newMap, destination, id: recordId});
        });
      }
    }, [parks.clusters]);

    useEffect(() => {
      cleanDuplicatedMap({newMap, layerName: "Polygon"});
      if (map.data) {
        const features = updateMapDTO(map.data.features, parks.mapColors);
        setPolygon({data: {features, type: "FeatureCollection"}, mapNew: newMap});
        newMap
          .getLayers()
          .getArray()
          .map((item) => {
            if (item.get("name") === "Polygon") {
              setLoader(false);
            }
          });
      }
    }, [map.data, parks.mapColors, newMap]);

    return (
      <div id={parkMap} className="parks-map">
        {loader && <Spin size={"large"} />}
      </div>
    );
  })
);
