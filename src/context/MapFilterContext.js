import { createContext, Component } from "react";

import api from "../services/api";

import FeaturesColections from "../services/featuresColections.js";

// import api from "../../services/api";

// Tipagem da Lista de Features

// interface TilesDynamicList {
//   id: string;
//   bbox: number[];
//   assets: { thumbnail: { href: string } };
//   properties: { collection: string };
// }

const Context = createContext();

class MapFilterProvider extends Component {
  state = {
    tilesDynamicList: [],
    showTileList: false,
    boundingBox: [],

    imageUrl: "",
    imageOpacity: 0,
    imageBounds: [],
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

  handleImageOverlay = (url, organizedBbox, opacity) => {
    this.setState({
      ...this.state,
      imageUrl: url,
      imageBounds: organizedBbox,
      imageOpacity: opacity,
    });
  };

  performFilteredSearch = async (form) => {
    console.log(form);

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
      satelliteOptions: ["landsat-8-l1", "sentinel-2-l1c"],
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
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export { Context, MapFilterProvider };
