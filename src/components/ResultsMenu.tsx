import { Component } from "react";
import { MdKeyboardBackspace, MdCloudQueue } from "react-icons/md";

import { Context } from "../context/MapFilterContext";

import "../styles/components/ResultsMenu.css";

// interface InterfaceFeature {
//   id: string;
//   bbox: number[];
//   assets: { thumbnail: { href: string } };
//   properties: { collection: string };
// }

export default class ResultsMenu extends Component {
  // Controle para verificar se o menu está aberto ou fechado
  handleResultsMenu() {
    this.context.setShowTileList(this.context.showTileList);
  }

  handleImageOverlay(url: string, bbox: number[], opacity: number) {
    const organizedBbox = [
      [bbox[1], bbox[0]],
      [bbox[3], bbox[2]],
    ];

    this.context.setImageLayerUpdating(true);
    this.context.handleImageOverlay(url, organizedBbox, opacity);
  }

  render() {
    const ResultsFilter = () => {
      const keys = Object.keys(this.context.tilesDynamicList);
      const featuresPivot = keys.map((key) => {
        return this.context.tilesDynamicList[key];
      });

      // * MELHORIA - ADICIONAR ACCORDION COMPONENT -> https://getbootstrap.com/docs/5.1/components/accordion/
      return (
        <div className="satellite-list">
          {featuresPivot.map((satellite, index) => (
            <div key={index} className="satellite-result">
              <h5>{Object.keys(satellite)}</h5>
              {Object.values(satellite).map((featureCollection: any, index) => (
                <FeaturesResult
                  key={index}
                  features={featureCollection.features}
                />
              ))}
            </div>
          ))}
        </div>
      );
    };

    const FeaturesResult = ({ features }) => {
      return (
        <>
          {features?.map((feature, index) => (
            <div className="satellite-image-list" key={index}>
              <p className="satellite-header">
                <span>
                  {feature.properties.collection}: {feature.id}
                </span>
                <span className="cloud-cover">
                  <MdCloudQueue size={18} color="var(--color-secondary)" />
                  {Number(
                    feature.properties["eo:cloud_cover"]
                  ).toFixed()}&#37;{" "}
                </span>
              </p>
              <div className="buttons">
                <button
                  onClick={() =>
                    this.handleImageOverlay(
                      feature.assets.thumbnail.href as string,
                      feature.bbox as number[],
                      1 as number
                    )
                  }
                >
                  Visualizar
                </button>
                <button>Baixar</button>
              </div>
            </div>
          ))}
          {!features ? <span>Sem resultado</span> : null}
        </>
      );
    };

    return (
      <div id="results-menu" hidden={!this.context.showTileList}>
        {/* Conteúdo do componente */}
        <div id="contents">
          <header>
            <h1>Resultados</h1>
            <MdKeyboardBackspace
              className="buttonMD"
              size="1.4rem"
              cursor="pointer"
              onClick={this.handleResultsMenu.bind(this)}
            />
          </header>
          {/* Resultados da busca */}
          <div id="results">
            <ResultsFilter />
          </div>
        </div>
      </div>
    );
  }
}
ResultsMenu.contextType = Context;
