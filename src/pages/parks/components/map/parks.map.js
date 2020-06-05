import React, {useEffect} from "react";
import "ol/ol.css";
import {createMap} from "../../../../services/map.service";
import {parkMap} from "../../../../consts/map.const";

export const ParksMap = () => {
  useEffect(() => {
    createMap();
  }, []);

  return <div id={parkMap} className="parks-map"></div>;
};
