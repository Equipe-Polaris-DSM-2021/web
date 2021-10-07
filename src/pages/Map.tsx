import { Component } from "react";

import {
  MapContainer,
  TileLayer,
  LayersControl,
  FeatureGroup,
  ImageOverlay,
} from "react-leaflet";

import { EditControl } from "react-leaflet-draw";

import { Context } from "../context/MapFilterContext";

import Sidebar from "../components/Sidebar";
import ResultsMenu from "../components/ResultsMenu";

import "../styles/pages/map.css";

export default class Explore extends Component {
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
            zoom={15}
            style={{ width: "100%", height: "100%" }}
          >
            <FeatureGroup>
              <EditControl
                position="topright"
                onCreated={this.onCreated.bind(this)}
                draw={{
                  rectangle: true,
                  polyline: false,
                  polygon: false,
                  circle: false,
                  marker: false,
                  circlemarker: false,
                }}
              />
            </FeatureGroup>
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
            {/* IMAGE OVERLAY */}
            <ImageOverlay
              bounds={this.context.imageBounds}
              url={this.context.imageUrl}
              opacity={this.context.imageOpacity}
            />
          </MapContainer>
        </div>
      </div>
    );
  }
}
Explore.contextType = Context;
