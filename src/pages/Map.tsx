import React, { Component, useEffect } from "react";

import {
  MapContainer,
  TileLayer,
  LayersControl,
  FeatureGroup,
} from "react-leaflet";

import L, { Map as LeafletMap, LayerGroup, LatLng } from "leaflet";

import { Context } from "../context/MapFilterContext";

import Sidebar from "../components/Sidebar";
import ResultsMenu from "../components/ResultsMenu";

import "../styles/pages/map.css";

export default class Explore extends Component {
  mapRef: any;
  mapInstance: L.Map;
  imageLayer: any;

  constructor(props: any) {
    super(props);

    this.mapRef = React.createRef();
  }

  state = {
    pageLoaded: false,
    mapInstance: null,
    MAP_TILE: L.tileLayer(
      `https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`,
      {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }
    ),

    mapParams: {
      center: L.latLng(-23.2683, -45.913486),
      zoom: 13,
      drawControl: true,
      layers: [
        L.tileLayer(`https://a.tile.openstreetmap.org/{z}/{x}/{y}.png`, {
          attribution:
            '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        }),
      ],
    },
  };

  componentDidMount() {
    this.setState({ ...this.state, pageLoaded: true });

    this.mapInstance = L.map("map-container", this.state.mapParams);

    const streets = L.tileLayer(
      `https://a.tile.openstreetmap.org/{z}/{x}/{y}.png`,
      {
        attribution:
          '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      }
    );

    const satellite = L.tileLayer(
      `https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}`,
      {
        attribution:
          '&copy;  <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      }
    );

    const baseMaps = {
      "Street View": streets,
      "Satellite View": satellite,
    };

    L.control.layers(baseMaps).addTo(this.mapInstance);
  }

  componentDidUpdate() {
    if (this.context.imageUrl) {
      this.handleMap(
        this.context.imageUrl,
        this.context.imageBounds,
        this.context.imageOpacity
      );
    }

    this.mapInstance.addEventListener("moveend", this.moveEnd.bind(this));
  }

  moveEnd(event) {
    const bbox = this.mapInstance.getBounds();

    let newBbox = [];

    if (bbox.getSouthWest().lat < bbox.getNorthEast().lat) {
      newBbox.push(bbox.getSouthWest(), bbox.getNorthEast());
    } else {
      newBbox.push(bbox.getNorthEast(), bbox.getSouthWest());
    }

    this.context.setBoundingBox(newBbox);
  }

  handleChangeBasemap() {
    // L.tileLayer("basemap");
  }

  handleMap(url: string, bounds: any, opacity: number) {
    if (this.imageLayer) {
      this.mapInstance.removeLayer(this.imageLayer);
    }

    this.imageLayer = L.imageOverlay(url, bounds, { opacity: opacity }).addTo(
      this.mapInstance
    );
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

        <div className="map-container" id="map-container"></div>
      </div>
    );
  }
}
Explore.contextType = Context;
