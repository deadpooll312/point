import React, {useEffect} from "react";
import "ol/ol.css";
import {createMap, setPolygon} from "../../../../services/map.service";
import {parkMap} from "../../../../consts/map.const";
import {inject, observer} from "mobx-react";

export const ParksMap = inject("store")(
  observer(({store: {map}}) => {
    useEffect(() => {
      const mapNew = createMap();
      map.getGeometry().then((data) => setPolygon({data, mapNew}));
    }, []);

    return <div id={parkMap} className="parks-map"></div>;
  })
);
