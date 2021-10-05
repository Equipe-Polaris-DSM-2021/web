import React, { useEffect, useState, useContext } from "react";
import {
  MapContainer,
  TileLayer,
  useMapEvents,
  LayersControl,
} from "react-leaflet";

import { Context } from "../context/MapFilterContext";

import Sidebar from "../components/Sidebar";
import ResultsMenu from "../components/ResultsMenu";

import "../styles/pages/map.css";

export default function Map() {
  const { showTileList, setBoundingBox } = useContext(Context);

  const [pageLoaded, setPageloaded] = useState(false);

  useEffect(() => {
    setPageloaded(true);
    return;
  }, []);

  function MyComponent() {
    const map = useMapEvents({
      unload: (event) => {
        console.log(event);
      },
      moveend: (event) => {
        const bbox = map.getBounds();
        let newBbox = [];
        // A MAIOR LAT EU BOTO DEPOIS

        if (bbox.getSouthWest().lat < bbox.getNorthEast().lat) {
          newBbox.push(bbox.getSouthWest(), bbox.getNorthEast());
        } else {
          newBbox.push(bbox.getNorthEast(), bbox.getSouthWest());
        }

        setBoundingBox(newBbox);
      },
    });
    return null;
  }

  return (
    <div id="page-map">
      {!showTileList ? pageLoaded ? <Sidebar /> : null : <ResultsMenu />}
      <div className="map-container">
        <MapContainer
          center={[-23.2683, -45.913486]}
          zoom={15}
          style={{ width: "100%", height: "100%" }}
        >
          <MyComponent />
          <LayersControl position="topright">
            <LayersControl.BaseLayer checked name="Street View">
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
            </LayersControl.BaseLayer>
            <LayersControl.BaseLayer name="Satellite View">
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
              />
            </LayersControl.BaseLayer>
          </LayersControl>
        </MapContainer>
      </div>
    </div>
  );
}
