import { createContext, Component } from "react";

// import api from "../services/api";

const Context = createContext();

class MapFilterProvider extends Component {
  state = {
    tilesDynamicList: [],
    showTileList: false,
    boundingBox: [],
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

  performFilteredSearch = async (form) => {
    this.setState({
      ...this.state,
      showTileList: false,
      tilesDynamicList: [1, 2, 4, 5],
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

    console.log(inputBody);

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
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export { Context, MapFilterProvider };
