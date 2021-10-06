import { createContext, Component } from "react";

// import api from "../services/api";

const Context = createContext();

class MapFilterProvider extends Component {
  state = {
    tilesDynamicList: [],
    showTileList: false,
    boundingBox: [],
  };

  performFilteredSearch = async (form) => {
    this.setState({
      ...this.state,
      showTileList: false,
      tilesDynamicList: [1, 2, 4, 5],
    });

    // if (this.state.boundingBox.length === 0)
    //   return console.log("Nenhuma área selecionada");

    // SWEET ALERT IMPLEMENTAR

    const bbox = [
      // this.state.boundingBox[0].lat.toString(),
      // this.state.boundingBox[0].lng.toString(),
      // this.state.boundingBox[1].lat.toString(),
      // this.state.boundingBox[1].lng.toString(),
    ];

    const inputBody = {
      bbox,
      time: `${form.periodFilter["date-initial"]}/${form.periodFilter["date-final"]}`,
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
          showTileList: this.state.showTileList,
          tilesDynamicList: this.state.tilesDynamicList,
          boundingBox: this.state.boundingBox,
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export { Context, MapFilterProvider };
