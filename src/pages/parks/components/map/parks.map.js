import React, {useEffect, useState} from "react";
import "ol/ol.css";
import {createMap, setPolygon, updateMapDTO} from "../../../../services/map.service";
import {parkMap} from "../../../../consts/map.const";
import {inject, observer} from "mobx-react";

export const ParksMap = inject("store")(
  observer(({store: {map, parks}}) => {
    const [newMap, setMap] = useState();
    useEffect(() => {
      setMap(createMap());
      map.getGeometry();
      map.getMapColors();
    }, []);

    useEffect(() => {
      if (map.data) {
        const features = updateMapDTO(map.data.features, parks.mapColors);
        setPolygon({data: {features, type: "FeatureCollection"}, mapNew: newMap});
      }
    }, [map.data, parks.mapColors, newMap]);

    return <div id={parkMap} className="parks-map"></div>;
  })
);
