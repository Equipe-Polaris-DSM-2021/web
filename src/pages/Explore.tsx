import { Component } from "react";

import { Context } from "../context/MapFilterContext";
import {
  Sidebar,
  ResultsMenu,
  ModalDownload,
  LeafletDraw,
  LeafletImageOverlay,
} from "../components";

import { LayersControl, MapContainer, TileLayer } from "react-leaflet";
import L from "leaflet";

import "../styles/pages/map.css";

export default class Explore extends Component {
  state = {
    pageLoaded: false,
    mapInstance: null,
  };

  componentDidMount() {
    this.setState({ ...this.state, pageLoaded: true });
  }

  // handleMap() {
  //   const { mapInstance } = this.state;

  //   const lyr = L.tileLayer(`${process.env.PUBLIC_URL}/temp/{z}/{x}/{y}.png`, {
  //     tms: true,
  //     opacity: 0.7,
  //     attribution: "dasdsadsadsadadasd",
  //   });

  //   L.control
  //     .layers({}, { overlays: lyr }, { collapsed: false })
  //     .addTo(mapInstance);

  //   mapInstance.fitBounds([
  //     [-5.3924177991646145, -45.91698007246761],
  //     [-3.29042674669571, -47.97389281097399],
  //   ]);
  // }

  componentDidUpdate() {
    console.log(this.state.mapInstance);
  }

  render() {
    return (
      <div id="page-map">
        <ModalDownload />
        {!this.context.showTileList ? (
          this.state.pageLoaded ? (
            <Sidebar />
          ) : null
        ) : (
          <ResultsMenu />
        )}

        <div className="map-container">
          <MapContainer
            center={[-4.341422272930162, -46.9454364417208]}
            zoom={8}
            style={{ width: "100%", height: "100%" }}
            whenCreated={(map) => {
              this.setState({ ...this.state, mapInstance: map });
            }}
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
              <LayersControl.Overlay name="Tile Mocked">
                <TileLayer
                  attribution="&copy; GdalToTiles"
                  url={`${process.env.PUBLIC_URL}/temp/{z}/{x}/{y}.png`}
                  tms={true}
                  opacity={0.7}
                />
              </LayersControl.Overlay>
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
