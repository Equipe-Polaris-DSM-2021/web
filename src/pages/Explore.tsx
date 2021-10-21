import React, { Component } from "react";

import { Context } from "../context/MapFilterContext";

import Sidebar from "../components/Sidebar";
import ResultsMenu from "../components/ResultsMenu";

import "../styles/pages/map.css";
import { LeafletDraw } from "../components/LeafletDraw";
import { LayersControl, MapContainer, TileLayer } from "react-leaflet";
import { LeafletImageOverlay } from "../components/ImageOverlay";

export default class Explore extends Component {
  imageLayer: any;

  constructor(props: any) {
    super(props);
  }

  state = {
    pageLoaded: false,
  };

  componentDidMount() {
    this.setState({ ...this.state, pageLoaded: true });
  }

  onCreated(e: any) {
    let { _northEast, _southWest } = e.layer._bounds;

    let newBbox = [];

    const getNorthEast = _northEast;
    const getSouthWest = _southWest;

    if (getSouthWest.lat < getNorthEast.lat) {
      newBbox.push(getSouthWest, getNorthEast);
    } else {
      newBbox.push(getNorthEast, getSouthWest);
    }

    this.context.setBoundingBox(newBbox);
  }

  render() {
    return (
      <div id="page-map">
        {!this.context.showTileList ? (
          this.state.pageLoaded ? (
            <Sidebar />
          ) : null
        ) : (
          <ResultsMenu />
        )}

        <div className="map-container">
          <MapContainer
            center={[-23.2683, -45.913486]}
            zoom={9}
            style={{ width: "100%", height: "100%" }}
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
            <LeafletDraw />
            <LeafletImageOverlay />
          </MapContainer>
        </div>
      </div>
    );
  }
}
Explore.contextType = Context;
