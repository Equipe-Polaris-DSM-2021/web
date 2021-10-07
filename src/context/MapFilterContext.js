import { createContext, Component } from "react";

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
    imageBounds: [
      [-76.26368, 122.99418],
      [-73.1584, 134.71451],
    ],
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
    this.setState({
      ...this.state,
      showTileList: false,
      tilesDynamicList: FeaturesColections.features,
    });

    if (this.state.boundingBox.length === 0)
      return alert("Nenhuma área selecionada");

    // SWEET ALERT IMPLEMENTAR
    const bbox = [
      this.state.boundingBox[0].lat,
      this.state.boundingBox[0].lng,
      this.state.boundingBox[1].lat,
      this.state.boundingBox[1].lng,
    ];

    const inputBody = {
      bbox,
      time: {
        "date-initial": form.periodFilter["date-initial"],
        "date-final": form.periodFilter["date-final"],
      },
      cloudCover: form.cloudFilter["cloud-range"],
      satelliteOptions: form.satelliteOptions,
    };

    try {
      const headers = {
        "Content-Type": "application/json",
        Accept: "application/geo+json",
      };
    } catch (error) {
      console.log(error);
    }

    setTimeout(() => {
      this.setState({ ...this.state, showTileList: true });
    }, 1000);
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
