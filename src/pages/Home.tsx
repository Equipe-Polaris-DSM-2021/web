import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Map, TileLayer, Marker, Popup, LayersControl, LayerGroup, Circle, Rectangle, FeatureGroup } from 'react-leaflet';

import "../styles/pages/home.css"

export default function Home() {
  return (
    <div id="page-map">
      <Map center={[-23.2683,-45.913486]}
        zoom={15} 
        style={{ width: '100%', height: '100%'}}
        scrollWheelZoom={true}
      >
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
      </Map>
    </div>
  )
}
