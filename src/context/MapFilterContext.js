import { createContext, Component } from "react";

import api from "../services/api";

const Context = createContext();

// Tipagem da Lista de Features

// interface TilesDynamicList {
//   id: string;
//   bbox: number[];
//   assets: { thumbnail: { href: string } };
//   properties: { collection: string };
// }

class MapFilterProvider extends Component {
  state = {
    tilesDynamicList: [],
    showTileList: false,
    boundingBox: [],

    imageUrl: "",
    imageOpacity: 0,
    imageBounds: [],
    drawAreaCreated: false,
    imageOverlayUpdating: false,
  };

  setBoundingBox = (bbox) => {
    this.setState({
      ...this.state,
      boundingBox: bbox,
    });
  };

  setShowTileList = (showTileList) => {
    this.setState({
      ...this.state,
      showTileList: !showTileList,
    });
  };

  setDrawAreaCreated = (created) => {
    this.setState({
      ...this.state,
      drawAreaCreated: created,
    });
  };

  setImageLayerUpdating = (updating) => {
    this.setState({
      ...this.state,
      imageOverlayUpdating: !this.state.imageOverlayUpdating,
    });
  };

  handleImageOverlay = (url, organizedBbox, opacity) => {
    this.setState({
      ...this.state,
      imageUrl: url,
      imageBounds: organizedBbox,
      imageOpacity: opacity,
    });
  };

  performFilteredSearch = async (form) => {
    this.setState({
      ...this.state,
      showTileList: false,
    });

    if (this.state.boundingBox.length === 0)
      return alert("Nenhuma área selecionada");

    // SWEET ALERT IMPLEMENTAR
    const bbox = [
      this.state.boundingBox[0].lng,
      this.state.boundingBox[0].lat,
      this.state.boundingBox[1].lng,
      this.state.boundingBox[1].lat,
    ];

    const inputBody = {
      satelliteOptions: form.satelliteOptions,
      bbox,

      date_initial: form.periodFilter["date-initial"],
      date_final: form.periodFilter["date-final"],

      cloudCover: form.cloudFilter["cloud-range"],
    };

    try {
      const { data } = await api.post("/satSearch", inputBody);

      this.setState({
        ...this.state,
        showTileList: true,
        tilesDynamicList: data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <Context.Provider
        value={{
          ...this.state,
          performFilteredSearch: this.performFilteredSearch,
          setBoundingBox: this.setBoundingBox,
          setShowTileList: this.setShowTileList,
          showTileList: this.state.showTileList,
          tilesDynamicList: this.state.tilesDynamicList,

          imageUrl: this.state.imageUrl,
          imageBounds: this.state.imageBounds,
          imageOpacity: this.state.imageOpacity,
          handleImageOverlay: this.handleImageOverlay,

          drawAreaCreated: this.state.drawAreaCreated,
          setDrawAreaCreated: this.setDrawAreaCreated,

          imageOverlayUpdating: this.state.imageOverlayUpdating,
          setImageLayerUpdating: this.setImageLayerUpdating,
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export { Context, MapFilterProvider };
