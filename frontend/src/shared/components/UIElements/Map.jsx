import React, { useRef, useEffect } from "react";

import "./Map.css";
import Map from "ol/Map";
import View from "ol/View";
import Tile from "ol/Tile";
import { OSM } from "ol/source";
import { fromLonLat } from "ol/proj";

export default function MapComp(props) {
  const mapRef = useRef();

  const { center, zoom } = props;

    useEffect(() => {
      new Map({
        target: mapRef.current.id,
        layers: [
          new Tile({
            source: new OSM()
          })
        ],
        view: new View({
          center: fromLonLat([center.lng, center.lat]),
          zoom: zoom
        })
      });
    }, [center, zoom]);

  return (
    <div
      ref={mapRef}
      className={`map ${props.className}`}
      style={props.style}
      id="map"
    ></div>
  );
}
